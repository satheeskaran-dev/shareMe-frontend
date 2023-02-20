import { FlexColumn } from "../../../../components/core/FlexItems";
import CreatePostCard from "../../../../components/layout/CreatePostCard";
import PostCard from "../../../../components/layout/PostCard";

const NewsFeed = ({ postCardProps, createPostCardProps }) => {
  const { profileImg } = postCardProps || {};
  const { handleNewPostFormSubmit } = createPostCardProps || {};

  return (
    <FlexColumn>
      <CreatePostCard {...{ profileImg, handleNewPostFormSubmit }} />
      <PostCard
        {...{
          post: "post",
          user: "",
        }}
      />
    </FlexColumn>
  );
};

export default NewsFeed;
