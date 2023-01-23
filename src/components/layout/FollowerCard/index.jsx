import { Button, Stack } from "@mui/material";
import { TypographyDark, TypographyMedium } from "../../../components/core/Typography";
import { Avatar, Container } from "./styles";

const FollowerCard = () => {
  return (
    <Container>
      <Avatar />
      <Stack direction='column' flexGrow={1}>
        <TypographyDark variant='subtitle2'>Satheesh Bala</TypographyDark>
        <TypographyMedium variant='subtitle2'>@satheeshBala</TypographyMedium>
      </Stack>
      <Button variant='outlined' color='primary'>
        Follow
      </Button>
    </Container>
  );
};

export default FollowerCard;
