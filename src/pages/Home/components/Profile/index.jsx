import ProfileCard from "./ProfileCard";
import { TypographyDark } from "../../../../components/core/Typography";
import FollowerCard from "../../../../components/layout/FollowerCard";
import { FlexColumn } from "../../../../components/core/FlexItems";

const Profile = ({ user }) => {
  return (
    <FlexColumn>
      <ProfileCard user={user} />
      <TypographyDark variant='h6'>Who is following you</TypographyDark>
      <FollowerCard name='Satheesh Bala' tagName='@SatheeshBala' />
      <FollowerCard name='John dio' tagName='@JohnDio' />
      <FollowerCard name='David Miller' tagName='@DavidMiller' />
    </FlexColumn>
  );
};

export default Profile;
