import Card from "../../../../components/layout/ProfileCard";
import { Box, Divider } from "@mui/material";
import {
  TypographyDark,
  TypographyMedium,
} from "../../../../components/core/Typography";
import { FollowInfo, ViewProfileButton } from "./styles";
import { useNavigate } from "react-router-dom";

const ProfileCard = ({ user }) => {
  const navigate = useNavigate();
  return (
    <Card user={user}>
      <Divider flexItem />
      <FollowInfo>
        <Box>
          <TypographyDark variant='h6'>
            {user?.followers?.length}
          </TypographyDark>
          <TypographyMedium>Followers</TypographyMedium>
        </Box>
        <Divider flexItem orientation='vertical' />
        <Box>
          <TypographyDark variant='h6'>
            {user?.following?.length}
          </TypographyDark>
          <TypographyMedium>Following</TypographyMedium>
        </Box>
      </FollowInfo>
      <Divider flexItem />
      <ViewProfileButton onClick={() => navigate("/profile")}>
        View Profile
      </ViewProfileButton>
    </Card>
  );
};

export default ProfileCard;
