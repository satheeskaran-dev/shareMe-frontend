import { Button, Stack } from "@mui/material";
import {
  TypographyDark,
  TypographyMedium,
} from "../../../components/core/Typography";
import { Avatar, Container } from "./styles";

const FollowerCard = ({ name, tagName }) => {
  return (
    <Container>
      <Avatar />
      <Stack direction='column' flexGrow={1}>
        <TypographyDark variant='subtitle2'>{name}</TypographyDark>
        <TypographyMedium variant='subtitle2'>{tagName}</TypographyMedium>
      </Stack>
      <Button variant='outlined' color='primary'>
        Follow
      </Button>
    </Container>
  );
};

export default FollowerCard;
