import { Stack } from "@mui/material";
import { TypographyDark, TypographyMedium } from "../../core/Typography";

const AdvertCard = ({ title, count }) => {
  return (
    <Stack direction='column'>
      <TypographyDark variant='subtitle2'>{title}</TypographyDark>
      <TypographyMedium variant='overline'>{count}</TypographyMedium>
    </Stack>
  );
};

export default AdvertCard;
