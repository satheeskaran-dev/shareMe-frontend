import { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
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
  useGetUserPostQuery,
} from "../../service/userService";
import { useCreatePostMutation } from "../../service/postService";
import { removeProfilePicture } from "../../store/features/authSlice";

const Profile = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const user = useSelector((state) => state?.persist?.auth?.user);
  const dispatch = useDispatch();

  //Profile remove query call
  const [removeProfile] = useRemoveProfileMutation();

  //create new post query call
  const [createPost] = useCreatePostMutation();

  //get post query call
  const { data } = useGetUserPostQuery(user._id);

  //profile avatar component menu open function
  const actionMenuOpenHandler = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const ActionMenuCloseHandler = useCallback(() => setAnchorEl(null), []);

  //remove profile image api call
  const handleRemoveProfileImage = async () => {
    try {
      const response = await removeProfile(user?._id);

      if (response?.data?.status === 200) {
        dispatch(removeProfilePicture());
        setAnchorEl(null);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // create new post form submit function
  const handleNewPostFormSubmit = async (data) => {
    let formData = new FormData();

    Object.keys(data).map((key) => formData.append(key, data[key]));

    const response = await createPost({ userId: user._id, data: formData });

    console.log(response);
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
            cardActions={{
              anchorEl,
              actionMenuOpenHandler,
              handleRemoveProfileImage,
              ActionMenuCloseHandler,
            }}
          />
          <CreatePostCard
            {...{ profileImg: user?.profileImg, handleNewPostFormSubmit }}
          />
          {data?.posts?.map((post) => (
            <PostCard
              key={post._id}
              {...{
                user,
                post,
              }}
            />
          ))}
        </FlexColumn>
      </CenterContainer>
      <RightContainer>
        <RightSide />
      </RightContainer>
    </Container>
  );
};

export default Profile;
