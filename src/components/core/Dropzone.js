import Dropzone from "react-dropzone";
import { styled, Box, useTheme, Typography, Stack } from "@mui/material";
import { EditOutlined } from "@mui/icons-material";

const DropZoneContainer = styled(Box, {
  shouldForwardProp: (props) => props !== "isError",
})(({ theme, isError }) => ({
  width: "100%",
  border: `1px solid ${isError ? "#f44336" : theme.palette.neutral.medium}`,
  borderRadius: "5px",
  padding: ".5rem",
  position: "relative",
}));

const StyledDropzone = ({ setFieldValue, errors, values = {} }) => {
  const { palette } = useTheme();
  return (
    <DropZoneContainer isError={Boolean(errors?.profileImg)}>
      <Dropzone
        acceptedFiles='.jpg,.jpeg,.png,.webp'
        multiple={false}
        onDrop={(acceptedFiles) =>
          setFieldValue("profileImg", acceptedFiles[0])
        }
      >
        {({ getRootProps, getInputProps }) => (
          <Box
            {...getRootProps()}
            border={`2px dashed ${palette.primary.main}`}
            p='.5rem'
            sx={{ "&:hover": { cursor: "pointer" } }}
          >
            <input {...getInputProps()} />
            {!values.profileImg ? (
              <Typography color={palette.neutral.medium}>
                Add your profile picture
              </Typography>
            ) : (
              <Stack
                direction='row'
                alignItems='center'
                justifyContent='space-between'
              >
                <Typography color={palette.neutral.medium}>
                  {values.profileImg.name}
                </Typography>
                <EditOutlined />
              </Stack>
            )}
          </Box>
        )}
      </Dropzone>
      <Typography
        variant='caption'
        color='error'
        sx={{ position: "absolute", bottom: "-20px", left: "14px" }}
      >
        {errors?.profileImg}
      </Typography>
    </DropZoneContainer>
  );
};

export default StyledDropzone;
