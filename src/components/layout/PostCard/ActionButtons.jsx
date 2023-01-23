import { Stack, Typography } from "@mui/material";
import { IconWrapper } from "./styles";
import { FavoriteBorderOutlined, ModeCommentOutlined, ShareOutlined } from "@mui/icons-material";

const ActionButtons = ({ likeButtonClicked, commentButtonClicked, shareButtonClicked }) => {
  return (
    <Stack direction='row' justifyContent='space-around'>
      <IconWrapper>
        <FavoriteBorderOutlined />
        <Typography variant='overline' onClick={likeButtonClicked}>
          Like
        </Typography>
      </IconWrapper>
      <IconWrapper>
        <ModeCommentOutlined />
        <Typography variant='overline' onClick={() => commentButtonClicked()}>
          Comment
        </Typography>
      </IconWrapper>
      <IconWrapper>
        <ShareOutlined />
        <Typography variant='overline' onClick={shareButtonClicked}>
          Share
        </Typography>
      </IconWrapper>
    </Stack>
  );
};

export default ActionButtons;
