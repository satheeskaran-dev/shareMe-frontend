import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Collapse } from "@mui/material";
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
import {
  useCreatePostMutation,
  useDeletePostMutation,
} from "../../service/postService";
import { useGetPostQuery } from "../../service/postService";
import { removeProfilePicture } from "../../store/features/authSlice";
import ProfileEditPopUp from "./components/ProfileEditPopUp";

const Profile = () => {
  const user = useSelector((state) => state?.persist?.auth?.user);

  const [openProfilePopUp, setOpenProfilePopUp] = useState(false);
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(user?.profileImg);

  const dispatch = useDispatch();

  //get post query call
  const { data: userPosts } = useGetPostQuery(user._id);
  console.log(userPosts?.data?.length);

  //Profile remove query call
  const [removeProfile, { isLoading: profileRemoveLoading }] =
    useRemoveProfileMutation();

  //Profile change query call
  const [changeProfile, { isLoading: profileChangeLoading }] =
    useChangeProfileMutation();

  //create new post query call
  const [
    createPost,
    { isLoading: isCreatePostLoading, isSuccess: isCreatePostSuccess },
  ] = useCreatePostMutation();

  //delete post query call

  const [deletePost, { isLoading: isPostDeleteLoading }] =
    useDeletePostMutation();

  //profile avatar component menu open function
  const handleProfileEditPopUpOpen = () => {
    setOpenProfilePopUp(true);
  };
  const handleProfileEditPopUpClose = () => {
    setOpenProfilePopUp(false);
  };

  //image on change

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
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

    console.log(user._id);
    const response = await changeProfile(user._id, formData);

    console.log(response);
  };

  // create new post form submit function
  const handleNewPostFormSubmit = async (data, resetForm) => {
    let formData = new FormData();

    Object.keys(data).map((key) => formData.append(key, data[key]));

    const response = await createPost({ userId: user._id, data: formData });

    response && resetForm();
  };
  // Post delete function
  const handleDeletePost = async (id) => {
    const response = await deletePost(id);
  };

  return (
    <Container>
      <LeftContainer>
        <LeftSide />
      </LeftContainer>
      <CenterContainer>
        <FlexColumn>
          <ProfileCard
            user={user}
            postCount={userPosts?.data?.length}
            cardActions={{
              handleProfileEditPopUpOpen,
            }}
          />
          <CreatePostCard
            {...{
              profileImg: user?.profileImg,
              handleNewPostFormSubmit,
              isCreatePostLoading,
            }}
          />
          <TransitionGroup>
            {userPosts?.data?.map((post) => (
              <Collapse key={post._id}>
                <PostCard
                  {...{
                    user,
                    post,
                    handleDeletePost,
                    isPostDeleteLoading,
                  }}
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
