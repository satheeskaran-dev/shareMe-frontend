import { useMemo } from "react";
import { Badge } from "@mui/material";
import { FlexContainer, FlexColumn } from "../../../components/core/FlexItems";
import { ProfileImages, CoverImage, UserAvatar, EditIcon } from "./styles";
import CoverPhoto from "../../../assets/images/cover.jpg";
import {
  TypographyDark,
  TypographyMedium,
} from "../../../components/core/Typography";
import ActionMenu from "./ActionMenu";

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
  const {
    anchorEl,
    actionMenuOpenHandler,
    ActionMenuCloseHandler,
    handleRemoveProfileImage,
  } = cardActions || {};
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
              onClick={actionMenuOpenHandler}
              id='basic-button'
              aria-controls={Boolean(anchorEl) ? "basic-menu" : undefined}
              aria-haspopup='true'
              aria-expanded={Boolean(anchorEl) ? "true" : undefined}
            />
          }
          sx={{ position: "absolute", bottom: "-50px" }}
        >
          <UserAvatar src={profileImg} alt='user' />
        </Badge>
        <ActionMenu
          anchorEl={anchorEl}
          handleClose={ActionMenuCloseHandler}
          removeButtonClicked={profileImg && handleRemoveProfileImage}
        />
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
