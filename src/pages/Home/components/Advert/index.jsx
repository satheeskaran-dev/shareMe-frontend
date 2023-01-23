import { FlexContainer } from "../../../../components/core/FlexItems";
import { TypographyDark } from "../../../../components/core/Typography";
import AdvertCard from "../../../../components/layout/AdvertCard";

const AdvertWidget = () => {
  return (
    <FlexContainer column gap='.75rem' sx={{ padding: "2rem" }}>
      <TypographyDark variant='h6'> Trends for your</TypographyDark>

      <AdvertCard />
      <AdvertCard />
      <AdvertCard />
      <AdvertCard />
    </FlexContainer>
  );
};

export default AdvertWidget;
