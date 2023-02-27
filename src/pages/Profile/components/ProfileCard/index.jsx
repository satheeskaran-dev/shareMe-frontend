import Card from "../../../../components/layout/ProfileCard";
import { Box, Divider } from "@mui/material";
import { FollowInfo } from "./styles";
import {
  TypographyDark,
  TypographyMedium,
} from "../../../../components/core/Typography";
import PersonalInfo from "./PersonalInfo";

const ProfileCard = (props) => {
  return (
    <Card {...props} isEditable>
      <Box width='100%' px='1rem'>
        <Divider flexItem />
        <FollowInfo>
          <Box>
            <TypographyDark variant='h6'>
              {props?.user?.followers?.length}
            </TypographyDark>
            <TypographyMedium>Followers</TypographyMedium>
          </Box>
          <Divider flexItem orientation='vertical' />
          <Box>
            <TypographyDark variant='h6'>
              {props?.user?.following?.length}
            </TypographyDark>
            <TypographyMedium>Following</TypographyMedium>
          </Box>
          <Divider flexItem orientation='vertical' />
          <Box>
            <TypographyDark variant='h6'>{props.postCount}</TypographyDark>
            <TypographyMedium>Posts</TypographyMedium>
          </Box>
        </FollowInfo>
        <Divider flexItem />
        <PersonalInfo {...props.user} />
      </Box>
    </Card>
  );
};

export default ProfileCard;
