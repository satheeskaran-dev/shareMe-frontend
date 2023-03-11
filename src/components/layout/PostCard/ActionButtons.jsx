import { Stack, Typography } from "@mui/material";
import { IconWrapper } from "./styles";
import {
  FavoriteBorderOutlined,
  ModeCommentOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useTheme } from "@mui/material";

const ActionButtons = ({
  likeButtonClicked,
  commentButtonClicked,
  shareButtonClicked,
  isLiked,
  post,
}) => {
  const user = useSelector((state) => state?.persist?.auth?.user);

  const theme = useTheme();

  const color = post?.likes?.includes(user._id)
    ? theme.palette.primary.main
    : "unset";

  return (
    <Stack direction='row' justifyContent='space-around'>
      <IconWrapper>
        <FavoriteBorderOutlined style={{ color: color }} />
        <Typography
          variant='overline'
          color={color}
          onClick={likeButtonClicked}
        >
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
