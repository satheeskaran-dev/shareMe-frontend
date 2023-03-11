import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Collapse, useTheme, useMediaQuery } from "@mui/material";
import { TransitionGroup } from "react-transition-group";
import {
  Container,
  LeftContainer,
  CenterContainer,
  RightContainer,
} from "../../components/layout/Containers";
import ProfileCard from "./components/ProfileCard";
import { FlexColumn } from "../../components/core/FlexItems";
import LeftSide from "./components/LeftSide";
import CreatePostCard from "../../components/layout/CreatePostCard";
import PostCard from "../../components/layout/PostCard";
import RightSide from "./components/RightSide";
import {
  useRemoveProfileMutation,
  useChangeProfileMutation,
} from "../../service/userService";
import { useDeletePostMutation } from "../../service/postService";
import { useGetPostQuery } from "../../service/postService";
import { removeProfilePicture } from "../../store/features/authSlice";
import ProfileEditPopUp from "./components/ProfileEditPopUp";
import { reSetUserData } from "../../store/features/authSlice";

const Profile = () => {
  const user = useSelector((state) => state?.persist?.auth?.user);

  const [openProfilePopUp, setOpenProfilePopUp] = useState(false);
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(user?.profileImg);
  const [deletingPostId, setDeletingPostId] = useState(null);

  const dispatch = useDispatch();
  const isMobile = useMediaQuery(useTheme().breakpoints.down("md"));

  //get post query call
  const { data: userPosts } = useGetPostQuery(user._id);

  //Profile remove query call
  const [removeProfile, { isLoading: profileRemoveLoading }] =
    useRemoveProfileMutation();

  //Profile change query call
  const [changeProfile, { isLoading: profileChangeLoading }] =
    useChangeProfileMutation();

  //delete post query call

  const [deletePost, { isLoading: isPostDeleteLoading }] =
    useDeletePostMutation();

  //profile avatar component menu open function
  const handleProfileEditPopUpOpen = () => {
    setImagePreview(user?.profileImg);
    setOpenProfilePopUp(true);
  };
  const handleProfileEditPopUpClose = () => {
    setOpenProfilePopUp(false);
    setImagePreview(null);
    setFile(null);
  };

  //image on change

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile || !(selectedFile instanceof Blob)) {
      return;
    }
    setFile(selectedFile);
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  //remove profile image api call

  const handleProfileRemoveButtonClicked = async () => {
    try {
      const response = await removeProfile(user?._id);
      if (response?.data?.status === 200) {
        dispatch(removeProfilePicture());
        setImagePreview(null);
        setFile(null);
        handleProfileEditPopUpClose();
      }
    } catch (err) {
      console.log(err);
    }
  };

  // update profile image

  const handleUpdateProfileFormSubmit = async () => {
    let formData = new FormData();
    formData.append("profileImg", file);
    const response = await changeProfile({ id: user._id, image: formData });
    dispatch(reSetUserData(response.data.user));
    handleProfileEditPopUpClose();
    setFile(null);
  };

  // Post delete function
  const handleDeletePost = async (id) => {
    setDeletingPostId(id);
    await deletePost(id);
  };

  //

  return (
    <Container>
      {!isMobile && (
        <LeftContainer>
          <LeftSide />
        </LeftContainer>
      )}
      <CenterContainer>
        <FlexColumn>
          <ProfileCard
            user={user}
            postCount={userPosts?.data?.length}
            cardActions={{
              handleProfileEditPopUpOpen,
            }}
          />
          {isMobile && <LeftSide />}
          <CreatePostCard
            {...{
              user,
            }}
          />
          <TransitionGroup>
            {userPosts?.data?.map((post) => (
              <Collapse key={post._id}>
                <PostCard
                  {...{
                    post,
                    handleDeletePost,
                  }}
                  isPostDeleteLoading={
                    deletingPostId === post._id && isPostDeleteLoading
                  }
                  isDeletable
                />
              </Collapse>
            ))}
          </TransitionGroup>
        </FlexColumn>
      </CenterContainer>

      <RightContainer>
        <RightSide />
      </RightContainer>

      <ProfileEditPopUp
        isOpen={openProfilePopUp}
        isProgressBarLoading={profileRemoveLoading || profileChangeLoading}
        imagePreview={imagePreview}
        isImageUploaderHasFile={Boolean(file)}
        handleImageChange={handleImageChange}
        removeButtonClicked={handleProfileRemoveButtonClicked}
        UpdateProfileImageButtonClicked={handleUpdateProfileFormSubmit}
        handleClose={handleProfileEditPopUpClose}
      />
    </Container>
  );
};

export default Profile;
