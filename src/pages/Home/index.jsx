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
import { useCreatePostMutation } from "../../service/postService";

const Home = () => {
  const user = useSelector((state) => state?.persist?.auth?.user);

  const [createPost] = useCreatePostMutation();

  const handleNewPostFormSubmit = async (data) => {
    let formData = new FormData();

    Object.keys(data).map((key) => formData.append(key, data[key]));

    const response = await createPost({ userId: user._id, data: formData });

    console.log(response);
  };
  return (
    <Container>
      <LeftContainer>
        <Profile user={user} />
      </LeftContainer>
      <CenterContainer>
        <NewsFeed
          handleNewPostFormSubmit={handleNewPostFormSubmit}
          createPostCardProps={{ handleNewPostFormSubmit, user }}
          postCardProps={user}
        />
      </CenterContainer>
      <RightContainer>
        <Advert />
      </RightContainer>
    </Container>
  );
};

export default Home;
