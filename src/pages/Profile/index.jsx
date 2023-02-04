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
import NewPostCard from "../../components/layout/NewPostCard";
import PostCard from "../../components/layout/PostCard";
import RightSide from "./components/RightSide";
import { useRemoveProfileMutation } from "../../service/userService";
import { removeProfilePicture } from "../../store/features/authSlice";

const Profile = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const user = useSelector((state) => state?.persist?.auth?.user);

  const [removeProfile] = useRemoveProfileMutation();
  const dispatch = useDispatch();

  const actionMenuOpenHandler = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const ActionMenuCloseHandler = useCallback(() => setAnchorEl(null), []);

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
          <NewPostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </FlexColumn>
      </CenterContainer>
      <RightContainer>
        <RightSide />
      </RightContainer>
    </Container>
  );
};

export default Profile;
