import Card from "../../../../components/layout/ProfileCard";
import { Box, Divider } from "@mui/material";
import { FollowInfo } from "./styles";
import {
  TypographyDark,
  TypographyMedium,
} from "../../../../components/core/Typography";
import PersonalInfo from "./PersonalInfo";

const ProfileCard = (user) => {
  return (
    <Card {...user}>
      <Box width='100%' px='1rem'>
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
          <Divider flexItem orientation='vertical' />
          <Box>
            <TypographyDark variant='h6'>59</TypographyDark>
            <TypographyMedium>Posts</TypographyMedium>
          </Box>
        </FollowInfo>
        <Divider flexItem />
        <PersonalInfo {...user} />
      </Box>
    </Card>
  );
};

export default ProfileCard;
