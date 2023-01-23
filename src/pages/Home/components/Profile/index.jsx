import ProfileCard from "./ProfileCard";
import { TypographyDark } from "../../../../components/core/Typography";
import FollowerCard from "../../../../components/layout/FollowerCard";
import { FlexColumn } from "../../../../components/core/FlexItems";

const Profile = () => {
  return (
    <FlexColumn>
      <ProfileCard />
      <TypographyDark variant='h6'>Who is following you</TypographyDark>
      <FollowerCard />
      <FollowerCard />
      <FollowerCard />
      <FollowerCard />
    </FlexColumn>
  );
};

export default Profile;
