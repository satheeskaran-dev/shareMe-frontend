import { useState } from "react";
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
import { useCreatePostMutation } from "../../../service/postService";

const NewPostCard = ({ user }) => {
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  //create new post query call
  const [createPost, { isLoading: isCreatePostLoading }] =
    useCreatePostMutation();

  const resetForm = () => {
    setDescription("");
    setFile(null);
  };

  //image on change

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile || !(selectedFile instanceof Blob)) {
      return;
    }
    setFile(selectedFile);
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  // create new post form submit function
  const handleNewPostFormSubmit = async (data) => {
    let formData = new FormData();
    Object.keys(data).map((key) => formData.append(key, data[key]));
    const response = await createPost({ userId: user._id, data: formData });
    if (response) {
      resetForm();
      setImagePreview(null);
      setFile(null);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        if (description || file) {
          handleNewPostFormSubmit({ description, image: file });
        }
        e.preventDefault();
      }}
    >
      <FlexContainer>
        <Avatar src={user?.profileImg} />
        <Stack direction='column' spacing={20} ml={15} width='100%'>
          <InputBase
            autoFocus
            multiline
            placeholder="What's happening?"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {imagePreview && (
            <img
              style={{
                width: "100%",
                borderRadius: "9px",
              }}
              src={imagePreview}
              alt=''
            />
          )}
          <Stack direction='row' justifyContent='space-between'>
            <IconWrapper component='label'>
              <input
                hidden
                accept='image/*'
                type='file'
                onChange={handleImageChange}
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
