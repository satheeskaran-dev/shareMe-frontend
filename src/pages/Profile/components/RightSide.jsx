import { FlexContainer } from "../../../components/core/FlexItems";
import { TypographyDark } from "../../../components/core/Typography";
import AdvertCard from "../../../components/layout/AdvertCard";

const RightSide = () => {
  return (
    <FlexContainer column gap='.75rem' sx={{ padding: "2rem" }}>
      <TypographyDark variant='h6'> Trends for your</TypographyDark>
      <AdvertCard title='#MongoDB' count='07k Shares' />
      <AdvertCard title='#React' count='27k Shares' />
      <AdvertCard title='#Nodejs' count='17k Shares' />
      <AdvertCard title='#Express' count='17k Shares' />
    </FlexContainer>
  );
};

export default RightSide;
