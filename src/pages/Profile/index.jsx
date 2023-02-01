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
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state?.persist?.auth?.user);
  return (
    <Container>
      <LeftContainer>
        <LeftSide />
      </LeftContainer>
      <CenterContainer>
        <FlexColumn>
          <ProfileCard {...user} />
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
