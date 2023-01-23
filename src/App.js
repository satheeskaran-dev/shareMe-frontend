import { useMemo } from "react";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import { themeSettings } from "./theme";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";

function App() {
  const mode = useSelector((state) => state.persist.theme.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
