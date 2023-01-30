import { colorTokens } from "./colors";
import { typography } from "./typography";

export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            //palette values for dark mode
            primary: {
              dark: colorTokens.primary[200],
              main: colorTokens.primary[500],
              light: colorTokens.primary[800],
            },
            neutral: {
              dark: colorTokens.grey[100],
              main: colorTokens.grey[500],
              mediumMain: colorTokens.grey[400],
              medium: colorTokens.grey[300],
              light: colorTokens.grey[700],
            },
            background: {
              default: colorTokens.grey[900],
              medium: colorTokens.grey[700],
              alt: colorTokens.grey[800],
            },
          }
        : {
            //palette values for light mode

            primary: {
              dark: colorTokens.primary[700],
              main: colorTokens.primary[500],
              light: colorTokens.primary[400],
            },
            neutral: {
              dark: colorTokens.grey[700],
              main: colorTokens.grey[500],
              mediumMain: colorTokens.grey[400],
              medium: colorTokens.grey[300],
              light: colorTokens.grey[50],
            },
            background: {
              default: colorTokens.grey[10],
              medium: colorTokens.grey[50],
              alt: colorTokens.grey[0],
            },
          }),
    },
    spacing: 1,
    shape: {
      borderRadius: 9,
    },

    shadows: [
      "none",
      "2.5px 12.8px 54px rgba(0, 0, 0, 0.15)",
      "0px 35px 60px rgba(0, 0, 0, 0.25)",
      "20px 55px 60px rgba(0, 0, 0, 0.25)",
      "10px 15px 60px rgba(0, 0, 0, 0.25)",
      ...Array(20).fill("none"),
    ],
    typography,
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            disableElevation: true,
            textTransform: "none",
            fontSize: "13px",
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          form: { width: "100%" },
        },
      },
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            position: "absolute",
            bottom: "-20px",
          },
        },
      },
    },
  };
};
