import { useMemo } from "react";
import { Badge } from "@mui/material";
import { FlexContainer, FlexColumn } from "../../../components/core/FlexItems";
import { ProfileImages, CoverImage, UserAvatar, EditIcon } from "./styles";
import CoverPhoto from "../../../assets/images/cover.jpg";
import {
  TypographyDark,
  TypographyMedium,
} from "../../../components/core/Typography";

const ProfileCard = ({
  children,
  user: { firstName, lastName, profileImg, work },
  cardActions,
  isEditable,
}) => {
  const fullName = useMemo(
    () => [firstName, lastName].join(" "),
    [firstName, lastName]
  );
  const { handleProfileEditPopUpOpen } = cardActions || {};
  return (
    <FlexContainer column>
      <ProfileImages>
        <CoverImage src={CoverPhoto} />
        <Badge
          overlap='circular'
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={
            <EditIcon
              sx={!isEditable && { display: "none" }}
              onClick={handleProfileEditPopUpOpen}
            />
          }
          sx={{ position: "absolute", bottom: "-50px" }}
        >
          <UserAvatar src={profileImg} alt='user' />
        </Badge>
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
