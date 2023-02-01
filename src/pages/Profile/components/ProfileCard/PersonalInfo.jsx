import {
  FlexBetween,
  FlexRow,
  FlexColumn,
} from "../../../../components/core/FlexItems";
import {
  TypographyDark,
  TypographyMedium,
} from "../../../../components/core/Typography";
import {
  ModeEditOutlineOutlined,
  AutorenewOutlined,
  HomeOutlined,
  WorkOutlineOutlined,
} from "@mui/icons-material";

const PersonalInfo = ({ status, location, companyName }) => {
  return (
    <FlexBetween width='100%' py='1rem'>
      <FlexColumn spacing='.75rem'>
        <TypographyDark variant='subtile1'>Your info</TypographyDark>
        {status && (
          <FlexRow>
            <AutorenewOutlined fontSize='small' />
            <TypographyDark variant='body2'>Status</TypographyDark>
            <TypographyMedium>{status}</TypographyMedium>
          </FlexRow>
        )}
        {location && (
          <FlexRow>
            <HomeOutlined fontSize='small' />
            <TypographyDark variant='body2'>Lives in</TypographyDark>
            <TypographyMedium>{location}</TypographyMedium>
          </FlexRow>
        )}
        {companyName && (
          <FlexRow>
            <WorkOutlineOutlined fontSize='small' />
            <TypographyDark variant='body2'>Works at</TypographyDark>
            <TypographyMedium>{companyName}</TypographyMedium>
          </FlexRow>
        )}
      </FlexColumn>
      <ModeEditOutlineOutlined />
    </FlexBetween>
  );
};

export default PersonalInfo;
