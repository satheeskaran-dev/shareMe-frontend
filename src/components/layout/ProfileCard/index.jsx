import { useCallback, useMemo, useState } from "react";
import { Badge } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { FlexContainer, FlexColumn } from "../../../components/core/FlexItems";
import { ProfileImages, CoverImage, UserAvatar, EditIcon } from "./styles";
import CoverPhoto from "../../../assets/images/cover.jpg";
import {
  TypographyDark,
  TypographyMedium,
} from "../../../components/core/Typography";
import ActionMenu from "./ActionMenu";
import { useRemoveProfileMutation } from "../../../service/userService";
import { removeProfilePicture } from "../../../store/features/authSlice";

const ProfileCard = ({ children, profileImg, firstName, lastName, work }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const dispatch = useDispatch();

  const actionMenuOpenHandler = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const { _id } = useSelector((state) => state?.persist?.auth?.user);
  const fullName = useMemo(
    () => [firstName, lastName].join(" "),
    [firstName, lastName]
  );

  const [removeProfile] = useRemoveProfileMutation();

  const ActionMenuCloseHandler = useCallback(() => setAnchorEl(null), []);

  const handleRemoveProfileImage = async () => {
    try {
      const response = await removeProfile(_id);

      if (response?.data?.status === 200) {
        dispatch(removeProfilePicture());
        setAnchorEl(null);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FlexContainer column>
      <ProfileImages>
        <CoverImage src={CoverPhoto} />
        <Badge
          overlap='circular'
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={
            <EditIcon
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
          removeButtonClicked={handleRemoveProfileImage}
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
