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
import {
  useGetPostsQuery,
  useDeletePostMutation,
} from "../../service/postService";

const Home = () => {
  const user = useSelector((state) => state?.persist?.auth?.user);

  const { data: posts } = useGetPostsQuery();

  //delete post query call

  const [deletePost] = useDeletePostMutation();

  // const handleNewPostFormSubmit = async (data) => {
  //   console.log("function called");
  //   let formData = new FormData();

  //   Object.keys(data).map((key) => formData.append(key, data[key]));

  //   const response = await createPost({ userId: user._id, data: formData });

  //   console.log(response);
  // };

  // Post delete function
  const handleDeletePost = async (id) => {
    await deletePost(id);
  };
  return (
    <Container>
      <LeftContainer>
        <Profile user={user} />
      </LeftContainer>
      <CenterContainer>
        <NewsFeed
          createPostCardProps={{
            handleDeletePost,
            user,
          }}
          posts={posts}
        />
      </CenterContainer>
      <RightContainer>
        <Advert />
      </RightContainer>
    </Container>
  );
};

export default Home;
