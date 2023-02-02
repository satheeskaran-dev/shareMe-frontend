import { FlexContainer, FlexColumn } from "../../../components/core/FlexItems";
import { ProfileImages, CoverImage, UserAvatar, EditIcon } from "./styles";
import CoverPhoto from "../../../assets/images/cover.jpg";
import {
  TypographyDark,
  TypographyMedium,
} from "../../../components/core/Typography";
import { useMemo } from "react";
import { Badge } from "@mui/material";
import { useRemoveProfileMutation } from "../../../service/userService";
import { useSelector } from "react-redux";

const ProfileCard = ({ children, profileImg, firstName, lastName, work }) => {
  const { _id } = useSelector((state) => state?.persist?.auth?.user);
  const fullName = useMemo(
    () => [firstName, lastName].join(" "),
    [firstName, lastName]
  );

  const [removeProfile, { isLoading }] = useRemoveProfileMutation();

  console.log(_id);

  const handleRemoveProfileImage = async () => {
    try {
      const response = await removeProfile(_id);
      console.log(response);
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
          badgeContent={<EditIcon onClick={handleRemoveProfileImage} />}
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
