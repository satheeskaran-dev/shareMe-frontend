import { useMemo } from "react";
import { FlexColumn } from "../../../../components/core/FlexItems";
import CreatePostCard from "../../../../components/layout/CreatePostCard";
import PostCard from "../../../../components/layout/PostCard";

const NewsFeed = ({ postCardProps, createPostCardProps }) => {
  const { firstName, lastName, profileImg } = postCardProps || {};
  const { handleNewPostFormSubmit } = createPostCardProps || {};

  const fullName = useMemo(
    () => [firstName, lastName].join(" "),
    [firstName, lastName]
  );
  return (
    <FlexColumn>
      <CreatePostCard {...{ profileImg, handleNewPostFormSubmit }} />
      <PostCard
        {...{
          fullName: fullName,
          profileImg,
          postedTime: "",
          postPicture: "",
          likes: "",
          comments: "",
          shares: "",
        }}
      />
    </FlexColumn>
  );
};

export default NewsFeed;
