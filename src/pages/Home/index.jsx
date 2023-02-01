import { useSelector } from "react-redux";
import {
  Container,
  LeftContainer,
  RightContainer,
  CenterContainer,
} from "../../components/layout/Containers";
import Profile from "./components/Profile";
import NewsFeed from "./components/NewsFeed";
import Advert from "./components/Advert";
import Img1 from "../../assets/images/postpic1.jpg";

const Home = () => {
  const user = useSelector((state) => state?.persist?.auth?.user);
  return (
    <Container>
      <LeftContainer>
        <Profile {...user} />
      </LeftContainer>
      <CenterContainer>
        <NewsFeed
          postCardProps={{
            image: Img1,
          }}
        />
      </CenterContainer>
      <RightContainer>
        <Advert />
      </RightContainer>
    </Container>
  );
};

export default Home;
