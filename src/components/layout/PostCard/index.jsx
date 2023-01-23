import { useState, useCallback } from "react";
import { Picture } from "./styles";
import { FlexContainer } from "../../../components/core/FlexItems";
import { Avatar, Divider, Stack, Typography, Collapse } from "@mui/material";
import { TypographyDark, TypographyMedium } from "../../../components/core/Typography";
import CommentsList from "./CommentsList";
import ActionButtons from "./ActionButtons";

const PostCard = ({ image }) => {
  const [openCommentBox, setOpenCommentBox] = useState(false);

  const handleCommentButtonClicked = useCallback(() => {
    setOpenCommentBox(!openCommentBox);
  }, [openCommentBox]);
  return (
    <FlexContainer gap='1rem' column>
      <Stack direction='row' spacing={10}>
        <Avatar />
        <Stack direction='column'>
          <TypographyDark variant='subtile2'> Satheeskaran</TypographyDark>
          <TypographyMedium variant='overline' fontWeight={300}>
            2h ago
          </TypographyMedium>
        </Stack>
      </Stack>
      {/* POST DESCRIPTION */}
      <Typography variant='body2'>
        Hi there... merry christmas i hope all of you enjoy lot during this holiday season
      </Typography>
      {/* POST IMAGE */}
      <Picture src={image} alt='post' />

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
