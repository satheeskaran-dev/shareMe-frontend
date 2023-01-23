import Card from "../../../../components/layout/ProfileCard";
import { Box, Divider } from "@mui/material";
import { FollowInfo } from "./styles";
import { TypographyDark, TypographyMedium } from "../../../../components/core/Typography";
import PersonalInfo from "./PersonalInfo";

const ProfileCard = () => {
  return (
    <Card>
      <Box width='100%' px='1rem'>
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
          <Divider flexItem orientation='vertical' />
          <Box>
            <TypographyDark variant='h6'>59</TypographyDark>
            <TypographyMedium>Posts</TypographyMedium>
          </Box>
        </FollowInfo>
        <Divider flexItem />
        <PersonalInfo />
      </Box>
    </Card>
  );
};

export default ProfileCard;
