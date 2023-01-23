import { Box, styled, Stack, Drawer as MuiDrawer } from "@mui/material";
import { PowerSettingsNewOutlined } from "@mui/icons-material";

export const Toolbar = styled((props) => <Box {...props} />)(({ theme }) => ({
  display: "flex",
  flexFlow: "row",
  alignItems: "center",
  padding: "1rem 3.5%",
  width: "100%",
  backgroundColor: theme.palette.background.alt,
}));

export const InputWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexFlow: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "1.5rem",
  padding: "0.1rem 1rem",
  backgroundColor: theme.palette.neutral.light,
  height: "40px",
  borderRadius: theme.shape.borderRadius,
}));

export const IconWrapper = styled((props) => <Stack direction='row' spacing={25} {...props} />)({
  "&>*:nth-of-type(n)": { fontSize: "25px", cursor: "pointer" },
});

export const LogoutButton = styled((props) => <PowerSettingsNewOutlined {...props} />)({
  fontSize: "25px",
  cursor: "pointer",
});

export const Drawer = styled((props) => <MuiDrawer {...props} />)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    borderRadius: "10px 10px 0 0",
    backgroundColor: theme.palette.background.alt,
    display: "flex",
    flexFlow: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "2rem 10%",
    "&>*:nth-of-type(n)": {
      cursor: "pointer",
    },
  },
}));
