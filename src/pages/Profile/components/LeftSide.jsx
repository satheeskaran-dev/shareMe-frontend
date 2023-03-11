import { Fragment } from "react";
import { FlexColumn } from "../../../components/core/FlexItems";
import { TypographyDark } from "../../../components/core/Typography";

import FollowerCard from "../../../components/layout/FollowerCard";

const LeftSide = () => {
  return (
    <Fragment>
      <FlexColumn spacing='1rem' mt='1.5rem'>
        <TypographyDark variant='subtitle1'>
          Who is following you
        </TypographyDark>
        <FollowerCard name='Satheesh Bala' tagName='@SatheeshBala' />
        <FollowerCard name='John dio' tagName='@JohnDio' />
        <FollowerCard name='David Miller' tagName='@DavidMiller' />
      </FlexColumn>
    </Fragment>
  );
};

export default LeftSide;
