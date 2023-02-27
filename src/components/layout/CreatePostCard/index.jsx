import { Avatar, Stack, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { FlexContainer } from "../../../components/core/FlexItems";
import InputBase from "../../../components/core/InputBase";
import {
  InsertPhotoOutlined,
  PlayCircleOutlined,
  LocationOnOutlined,
} from "@mui/icons-material";
import { IconWrapper } from "./styles";
import { useState } from "react";

const NewPostCard = ({
  profileImg,
  handleNewPostFormSubmit,
  isCreatePostLoading,
}) => {
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const resetForm = () => {
    setDescription("");
    setSelectedFile(null);
  };

  return (
    <form
      onSubmit={(e) => {
        if (description || selectedFile) {
          handleNewPostFormSubmit(
            { description, image: selectedFile },
            resetForm
          );
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
              <LoadingButton
                variant='contained'
                type='submit'
                loading={isCreatePostLoading}
              >
                Post
              </LoadingButton>
            </IconWrapper>
          </Stack>
        </Stack>
      </FlexContainer>
    </form>
  );
};

export default NewPostCard;
