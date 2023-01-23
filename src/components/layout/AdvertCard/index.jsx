import { Stack } from "@mui/material";
import { TypographyDark, TypographyMedium } from "../../core/Typography";

const AdvertCard = () => {
  return (
    <Stack direction='column'>
      <TypographyDark variant='subtitle2'>#MongoDB</TypographyDark>
      <TypographyMedium variant='overline'>87k Shares</TypographyMedium>
    </Stack>
  );
};

export default AdvertCard;
