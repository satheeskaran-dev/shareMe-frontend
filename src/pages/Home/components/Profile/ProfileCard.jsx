import Card from "../../../../components/layout/ProfileCard";
import { Box, Divider } from "@mui/material";
import { TypographyDark, TypographyMedium } from "../../../../components/core/Typography";
import { FollowInfo, ViewProfileButton } from "./styles";
import { useNavigate } from "react-router-dom";

const ProfileCard = () => {
  const navigate = useNavigate();
  return (
    <Card>
      <Divider flexItem />
      <FollowInfo>
        <Box>
          <TypographyDark variant='h6'>5998</TypographyDark>
          <TypographyMedium>Followers</TypographyMedium>
        </Box>
        <Divider flexItem orientation='vertical' />
        <Box>
          <TypographyDark variant='h6'>5998</TypographyDark>
          <TypographyMedium>Following</TypographyMedium>
        </Box>
      </FollowInfo>
      <Divider flexItem />
      <ViewProfileButton onClick={() => navigate("/profile")}>View Profile</ViewProfileButton>
    </Card>
  );
};

export default ProfileCard;
