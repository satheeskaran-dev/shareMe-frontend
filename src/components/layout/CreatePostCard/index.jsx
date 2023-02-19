import { Avatar, Button, Stack, Typography } from "@mui/material";
import { FlexContainer } from "../../../components/core/FlexItems";
import InputBase from "../../../components/core/InputBase";
import {
  InsertPhotoOutlined,
  PlayCircleOutlined,
  LocationOnOutlined,
} from "@mui/icons-material";
import { IconWrapper } from "./styles";
import { useState } from "react";

const NewPostCard = ({ profileImg, handleNewPostFormSubmit }) => {
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <form
      onSubmit={(e) => {
        if (description || selectedFile) {
          handleNewPostFormSubmit({ description, image: selectedFile });
        }

        e.preventDefault();
      }}
    >
      <FlexContainer>
        <Avatar src={profileImg} />
        <Stack direction='column' spacing={20} ml={15} width='100%'>
          <InputBase
            multiline
            placeholder="What's happening?"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Stack direction='row' justifyContent='space-between'>
            <IconWrapper component='label'>
              <input
                hidden
                accept='image/*'
                type='file'
                onChange={(e) => setSelectedFile(e.target.files[0])}
              />
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
              <Button variant='contained' type='submit'>
                Post
              </Button>
            </IconWrapper>
          </Stack>
        </Stack>
      </FlexContainer>
    </form>
  );
};

export default NewPostCard;
