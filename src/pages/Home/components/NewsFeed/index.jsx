import { FlexColumn } from "../../../../components/core/FlexItems";
import NewPostCard from "../../../../components/layout/NewPostCard";
import PostCard from "../../../../components/layout/PostCard";

const NewsFeedWidget = ({ postCardProps, newPostCardProps }) => {
  return (
    <FlexColumn>
      <NewPostCard {...newPostCardProps} />
      <PostCard {...postCardProps} />
      <PostCard {...postCardProps} />
      <PostCard {...postCardProps} />
    </FlexColumn>
  );
};

export default NewsFeedWidget;
