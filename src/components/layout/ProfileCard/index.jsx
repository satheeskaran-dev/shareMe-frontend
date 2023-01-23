import { FlexContainer, FlexColumn } from "../../../components/core/FlexItems";
import { ProfileImages, CoverImage, UserAvatar } from "./styles";
import CoverPhoto from "../../../assets/images/cover.jpg";
import { TypographyDark, TypographyMedium } from "../../../components/core/Typography";

const ProfileCard = ({ children, userImage }) => {
  return (
    <FlexContainer column>
      <ProfileImages>
        <CoverImage src={CoverPhoto} />
        <UserAvatar src={userImage} alt='user' />
      </ProfileImages>
      <FlexColumn alignItems='center' mt='3.5rem' spacing={0}>
        <TypographyDark variant='h6'>Satheeskaran</TypographyDark>
        <TypographyMedium mb='1.5rem'>Software Engineer</TypographyMedium>
        {children}
      </FlexColumn>
    </FlexContainer>
  );
};

export default ProfileCard;
