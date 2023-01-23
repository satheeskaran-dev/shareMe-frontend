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

const Profile = () => {
  return (
    <Container>
      <LeftContainer>
        <LeftSide />
      </LeftContainer>
      <CenterContainer>
        <FlexColumn>
          <ProfileCard />
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
