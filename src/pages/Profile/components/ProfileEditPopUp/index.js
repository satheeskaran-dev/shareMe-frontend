import { Modal, Box, Typography, Button } from "@mui/material";
import { Avatar, CancelButton, Container, ProgressBar } from "./styles";
import { EditOutlined, DeleteOutlineOutlined } from "@mui/icons-material";

const ProfileEditPopUp = ({
  isOpen,
  handleClose,
  imagePreview,
  isImageUploaderHasFile,
  removeButtonClicked,
  isProgressBarLoading,
  handleImageChange,
  UpdateProfileImageButtonClicked,
}) => {
  return (
    <Modal sx={{ display: "flex", p: 20 }} open={isOpen} onClose={handleClose}>
      <Container>
        <Typography variant='subtitle1' fontWeight={700} align='left' mb={10}>
          Profile picture
        </Typography>
        <Typography>
          A picture helps people recognize you and lets you know when you’re
          signed in to your account
        </Typography>
        <Avatar src={imagePreview} />
        <Box width='100%' display='flex' gap='20px' mt={20}>
          <Button
            variant='outlined'
            fullWidth
            startIcon={imagePreview && <EditOutlined />}
            component='label'
          >
            {imagePreview ? "Change" : "Add"}
            <input
              hidden
              accept='image/*'
              type='file'
              onChange={handleImageChange}
              name='profileImg'
            />
          </Button>
          {imagePreview && (
            <Button
              variant='outlined'
              fullWidth
              startIcon={!isImageUploaderHasFile && <DeleteOutlineOutlined />}
              onClick={
                isImageUploaderHasFile
                  ? UpdateProfileImageButtonClicked
                  : removeButtonClicked
              }
            >
              {isImageUploaderHasFile ? "Set" : "Remove"}
            </Button>
          )}
        </Box>
        <CancelButton onClick={handleClose} />
        <ProgressBar isLoading={isProgressBarLoading} />
      </Container>
    </Modal>
  );
};

export default ProfileEditPopUp;
