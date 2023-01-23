import { FlexBetween, FlexRow, FlexColumn } from "../../../../components/core/FlexItems";
import { TypographyDark, TypographyMedium } from "../../../../components/core/Typography";
import {
  ModeEditOutlineOutlined,
  AutorenewOutlined,
  HomeOutlined,
  WorkOutlineOutlined,
} from "@mui/icons-material";

const PersonalInfo = () => {
  return (
    <FlexBetween width='100%' py='1rem'>
      <FlexColumn spacing='.75rem'>
        <TypographyDark variant='subtile1'>Your info</TypographyDark>
        <FlexRow>
          <AutorenewOutlined fontSize='small' />
          <TypographyDark variant='body2'>Status</TypographyDark>
          <TypographyMedium>in Relationship</TypographyMedium>
        </FlexRow>
        <FlexRow>
          <HomeOutlined fontSize='small' />
          <TypographyDark variant='body2'>Lives in</TypographyDark>
          <TypographyMedium>Kodikamam</TypographyMedium>
        </FlexRow>
        <FlexRow>
          <WorkOutlineOutlined fontSize='small' />
          <TypographyDark variant='body2'>Works at</TypographyDark>
          <TypographyMedium>HUEX</TypographyMedium>
        </FlexRow>
      </FlexColumn>
      <ModeEditOutlineOutlined />
    </FlexBetween>
  );
};

export default PersonalInfo;
