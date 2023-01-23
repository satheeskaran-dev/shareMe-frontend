import { Avatar, Button, Stack, Typography } from "@mui/material";
import { FlexContainer } from "../../../components/core/FlexItems";
import InputBase from "../../../components/core/InputBase";
import { InsertPhotoOutlined, PlayCircleOutlined, LocationOnOutlined } from "@mui/icons-material";
import { IconWrapper } from "./styles";

const NewPostCard = () => {
  return (
    <FlexContainer>
      <Avatar />
      <Stack direction='column' spacing={20} ml={15} width='100%'>
        <InputBase multiline placeholder="What's happening?" />
        <Stack direction='row' justifyContent='space-between'>
          <IconWrapper>
            <InsertPhotoOutlined />
            <Typography variant='overline'>Photo</Typography>
          </IconWrapper>
          <IconWrapper>
            <PlayCircleOutlined />
            <Typography variant='overline'>Video</Typography>
          </IconWrapper>
          <IconWrapper>
            <LocationOnOutlined />
            <Typography variant='overline'>Location</Typography>
          </IconWrapper>
          <IconWrapper>
            <Button variant='contained'>Post</Button>
          </IconWrapper>
        </Stack>
      </Stack>
    </FlexContainer>
  );
};

export default NewPostCard;
