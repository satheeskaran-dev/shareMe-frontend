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
import {
  TypographyDark,
  TypographyMedium,
} from "../../../components/core/Typography";
import CommentsList from "./CommentsList";
import ActionButtons from "./ActionButtons";
import DeleteIcon from "@mui/icons-material/Delete";

const PostCard = ({ user, post, handleDeletePost, isPostDeleteLoading }) => {
  const [openCommentBox, setOpenCommentBox] = useState(false);

  const handleCommentButtonClicked = useCallback(() => {
    setOpenCommentBox(!openCommentBox);
  }, [openCommentBox]);
  return (
    <FlexContainer gap='1rem' column sx={{ mb: 20 }}>
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
      <Stack direction='row' spacing={10}>
        <Avatar src={user?.profileImg} />
        <Stack direction='column'>
          <TypographyDark variant='subtile2'>
            {`${user?.firstName} ${user?.lastName}`}
          </TypographyDark>
          <TypographyMedium variant='overline' fontWeight={300}>
            2h ago
          </TypographyMedium>
        </Stack>
      </Stack>
      {/* POST DESCRIPTION */}
      <Typography variant='body2'>{post?.description}</Typography>
      {/* POST IMAGE */}
      {post?.image && <Picture src={post?.image} alt='post' />}

      <Stack direction='row' justifyContent='space-around'>
        <Typography variant='overline' flexGrow={1}>
          399 Liks
        </Typography>

        <Typography variant='overline' pr={10}>
          54 Comments
        </Typography>

        <Typography variant='overline'>12 Shares</Typography>
      </Stack>

      <Divider flexItem />

      {/* POST LIKE , COMMENTS ,SHARE  */}
      <ActionButtons commentButtonClicked={handleCommentButtonClicked} />

      <Collapse in={openCommentBox}>
        <CommentsList />
      </Collapse>
    </FlexContainer>
  );
};

export default PostCard;
