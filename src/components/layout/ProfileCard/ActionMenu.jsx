import { Menu, MenuItem, styled, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import UploadIcon from "@mui/icons-material/Upload";
import PanoramaIcon from "@mui/icons-material/Panorama";
import { TypographyMedium } from "../../../components/core/Typography";

const Wrapper = styled(Box)({
  display: "flex",
  flexFlow: "row",
  gap: "10px",
  alignItems: "center",
});
const IconWrapper = styled(Box)(({ theme }) => ({
  width: "25px",
  height: "25px",
  borderRadius: "50%",
  display: "grid",
  placeContent: "center",
  backgroundColor: theme.palette.background.medium,
}));

const ActionMenu = ({
  anchorEl,
  handleClose,
  removeButtonClicked,
  profileImg,
}) => {
  return (
    <Menu
      id='basic-menu'
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      PaperProps={{ sx: { boxShadow: "4px 22px 54px #695F971A" } }}
    >
      <MenuItem>
        <Wrapper>
          <IconWrapper>
            <PanoramaIcon fontSize='15px' />
          </IconWrapper>

          <TypographyMedium variant='subtitle2'>View profile</TypographyMedium>
        </Wrapper>
      </MenuItem>
      <MenuItem>
        <Wrapper>
          <IconWrapper>
            <UploadIcon fontSize='15px' />
          </IconWrapper>

          <TypographyMedium variant='subtitle2'>
            Upload profile
          </TypographyMedium>
        </Wrapper>
      </MenuItem>
      {profileImg && (
        <MenuItem onClick={removeButtonClicked}>
          <Wrapper>
            <IconWrapper>
              <DeleteIcon fontSize='15px' />
            </IconWrapper>
            <TypographyMedium variant='subtitle2'>
              Remove profile
            </TypographyMedium>
          </Wrapper>
        </MenuItem>
      )}
    </Menu>
  );
};

export default ActionMenu;
