import { useCallback, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Stack,
  IconButton,
  InputAdornment,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Toolbar, IconWrapper, LogoutButton } from "./styles";
import Logo from "../../core/Logo";
import {
  Search,
  ChatBubbleOutlineOutlined,
  DarkModeOutlined,
  LightModeOutlined,
  NotificationsNoneOutlined,
  HelpOutlineOutlined,
  Menu,
} from "@mui/icons-material";
import InputBase from "../../../components/core/InputBase";
import { toggleMode } from "../../../store/features/themeSlice";
import MobileMenu from "./MobileMenu";

const Header = ({ logoutButtonClicked }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { mode, user } = useSelector((state) => ({
    mode: state?.persist?.theme?.mode,
    user: state?.persist?.auth?.user,
  }));
  const dispatch = useDispatch();
  const isSmallDevices = useMediaQuery(useTheme().breakpoints.down("1000"));

  const toggleMobileMenuHandler = useCallback(
    () => setMobileMenuOpen(!mobileMenuOpen),
    [mobileMenuOpen]
  );

  const fullName = useMemo(
    () => `${user?.firstName} ${user?.lastName}`,
    [user.firstName, user.lastName]
  );

  return (
    <Toolbar>
      <Stack
        direction='row'
        alignItems='center'
        justifyContent={isSmallDevices && "space-between"}
        spacing={30}
        flexGrow={1}
      >
        <Logo />
        {isSmallDevices ? (
          <Menu sx={{ cursor: "pointer" }} onClick={toggleMobileMenuHandler} />
        ) : (
          <InputBase
            fullWidth={false}
            height='2.7rem'
            placeholder='Search...'
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton edge='end'>
                    <Search />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        )}
      </Stack>
      {!isSmallDevices && (
        <Stack direction='row' alignItems='center' spacing={30}>
          <IconWrapper>
            <Stack onClick={() => dispatch(toggleMode())}>
              {mode === "dark" ? (
                <LightModeOutlined fontSize='25px' />
              ) : (
                <DarkModeOutlined fontSize='25px' />
              )}
            </Stack>
            <ChatBubbleOutlineOutlined />
            <NotificationsNoneOutlined />
            <HelpOutlineOutlined />
          </IconWrapper>
          <Typography variant='body1'>{fullName}</Typography>
          <LogoutButton onClick={logoutButtonClicked} />
        </Stack>
      )}
      {isSmallDevices && (
        <MobileMenu
          isOpen={mobileMenuOpen}
          handleClose={toggleMobileMenuHandler}
        >
          <Stack onClick={() => dispatch(toggleMode())}>
            {mode === "dark" ? <LightModeOutlined /> : <DarkModeOutlined />}
          </Stack>
          <ChatBubbleOutlineOutlined />
          <NotificationsNoneOutlined />
          <HelpOutlineOutlined />
          <LogoutButton onClick={logoutButtonClicked} />
        </MobileMenu>
      )}
    </Toolbar>
  );
};

export default Header;
