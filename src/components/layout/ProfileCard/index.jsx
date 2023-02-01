import { FlexContainer, FlexColumn } from "../../../components/core/FlexItems";
import { ProfileImages, CoverImage, UserAvatar } from "./styles";
import CoverPhoto from "../../../assets/images/cover.jpg";
import {
  TypographyDark,
  TypographyMedium,
} from "../../../components/core/Typography";
import { useMemo } from "react";

const ProfileCard = ({ children, profileImg, firstName, lastName, work }) => {
  const fullName = useMemo(
    () => [firstName, lastName].join(" "),
    [firstName, lastName]
  );
  return (
    <FlexContainer column>
      <ProfileImages>
        <CoverImage src={CoverPhoto} />
        <UserAvatar src={profileImg} alt='user' />
      </ProfileImages>
      <FlexColumn alignItems='center' mt='3.5rem' spacing={0}>
        <TypographyDark variant='h6'>{fullName}</TypographyDark>
        <TypographyMedium mb='1.5rem'>{work}</TypographyMedium>
        {children}
      </FlexColumn>
    </FlexContainer>
  );
};

export default ProfileCard;
