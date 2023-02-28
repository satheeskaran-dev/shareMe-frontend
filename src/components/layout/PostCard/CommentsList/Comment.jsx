import { Stack } from "@mui/material";
import { InputWrapper, Avatar } from "./styles";
import {
  TypographyDark,
  TypographyMedium,
} from "../../../../components/core/Typography";

const Comment = () => {
  return (
    <Stack direction='row' spacing={15}>
      <Avatar />
      <InputWrapper>
        <TypographyDark variant='caption'>Satheeskaran</TypographyDark>
        <TypographyMedium variant='overline'>
          This is test comment and it's appear all the post cards as same
        </TypographyMedium>
      </InputWrapper>
    </Stack>
  );
};

export default Comment;
