import React from "react";
import { Stack, InputAdornment, IconButton } from "@mui/material";
import { Avatar } from "./styles";
import InputBase from "../../../../components/core/InputBase";
import { SendOutlined } from "@mui/icons-material";

const NewComment = () => {
  return (
    <Stack direction='row' spacing={15}>
      <Avatar />
      <InputBase
        autoFocus
        multiline
        fontSize='12px'
        placeholder='Write your comment here...'
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton edge='end'>
                <SendOutlined fontSize='small' />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
};

export default NewComment;
