import { FlexColumn } from "../../../../components/core/FlexItems";
import CreatePostCard from "../../../../components/layout/CreatePostCard";
import PostCard from "../../../../components/layout/PostCard";

const NewsFeed = ({ posts, createPostCardProps }) => {
  // const { profileImg } = postCardProps || {};
  const { handleNewPostFormSubmit, handleDeletePost, user } =
    createPostCardProps || {};

  return (
    <FlexColumn>
      <CreatePostCard {...{ handleNewPostFormSubmit, user }} />
      {posts?.map((post) => (
        <PostCard
          key={post._id}
          {...{
            post: post,
            handleDeletePost,
            user: "",
          }}
        />
      ))}
    </FlexColumn>
  );
};

export default NewsFeed;
