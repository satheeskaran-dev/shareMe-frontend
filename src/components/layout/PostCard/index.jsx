import { useState, useCallback } from "react";
import { Picture } from "./styles";
import { FlexContainer } from "../../../components/core/FlexItems";
import {
  Avatar,
  Divider,
  Stack,
  Typography,
  Collapse,
  Box,
} from "@mui/material";
import { TypographyDark } from "../../../components/core/Typography";
import CommentsList from "./CommentsList";
import ActionButtons from "./ActionButtons";
import DeleteIcon from "@mui/icons-material/Delete";
import { useLikePostMutation } from "../../../service/postService";
import { useSelector } from "react-redux";

const PostCard = ({
  post,
  handleDeletePost,
  isPostDeleteLoading,
  isDeletable,
}) => {
  const [openCommentBox, setOpenCommentBox] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const user = useSelector((state) => state?.persist?.auth?.user);

  const [likePost] = useLikePostMutation();

  const handleCommentButtonClicked = useCallback(() => {
    setOpenCommentBox(!openCommentBox);
  }, [openCommentBox]);

  const handleLikeButtonClicked = async () => {
    setIsLiked((prev) => !prev);
    await likePost({
      userId: user._id,
      postId: post._id,
      isLiked: isLiked,
    });
  };
  return (
    <FlexContainer gap='1rem' column sx={{ mb: 20 }}>
      {isDeletable && (
        <Box
          position='absolute'
          top='1rem'
          right='1rem'
          sx={{ cursor: "pointer" }}
          onClick={() => handleDeletePost(post._id)}
        >
          {isPostDeleteLoading ? (
            <TypographyDark>Deleting...</TypographyDark>
          ) : (
            <DeleteIcon fontSize='small' />
          )}
        </Box>
      )}
      <Stack direction='row' spacing={10} alignItems='center'>
        <Avatar src={post?.user?.profileImg} />
        <Stack direction='column'>
          <TypographyDark variant='subtile2'>
            {`${post?.user?.firstName} ${post?.user?.lastName}`}
          </TypographyDark>
          {/* <TypographyMedium variant='overline' fontWeight={300}>
            2h ago
          </TypographyMedium> */}
        </Stack>
      </Stack>
      {/* POST DESCRIPTION */}
      <Typography variant='body2'>{post?.description}</Typography>
      {/* POST IMAGE */}
      {post?.image && <Picture src={post?.image} alt='post' />}

      <Stack direction='row' justifyContent='space-around'>
        <Typography variant='overline' flexGrow={1}>
          {`${post?.likes?.length} Likes`}
        </Typography>

        <Typography variant='overline' pr={10}>
          0 Comments
        </Typography>

        <Typography variant='overline'>0 Shares</Typography>
      </Stack>

      <Divider flexItem />

      {/* POST LIKE , COMMENTS ,SHARE  */}
      <ActionButtons
        commentButtonClicked={handleCommentButtonClicked}
        likeButtonClicked={handleLikeButtonClicked}
        isLiked={isLiked}
        post={post}
      />

      <Collapse in={openCommentBox}>
        <CommentsList />
      </Collapse>
    </FlexContainer>
  );
};

export default PostCard;
