import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface TypeText {
    disabled: string;
    default: string;
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary?: string;
    quinary?: string;
  }
  interface TypeBackground {
    default: string;
    paper: string;
    primary?: string;
    secondary?: string;
    tertiary?: string;
    quaternary?: string;
  }
}

const theme = createTheme({
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: "13px",
          padding: "10px",
          cursor: "pointer",
        },
      },
    },
  },
  typography: {
    fontSize: 16,
  },
  palette: {
    primary: {
      main: "#1E3A8A",
      light: "#173754",
      dark: "#0f283e",
      contrastText: "#6FA0FF",
    },
    secondary: {
      main: "#1E3A8A",
      light: "#4d84f2",
      dark: "#2659c0",
      contrastText: "#E4F2FF",
    },
    background: {
      paper: "#122E47",
      default: "#fff",
      primary: "#1E3A8A",
      secondary: "#031A2C",
      tertiary: "#0A263B",
      quaternary: "#002C4B",
    },
    text: {
      disabled: "none",
      default: "#000",
      primary: "#000",
      secondary: "#fff",
      tertiary: "#1E3A8A",
      quaternary: "#80ABFF",
      quinary: "#04B283",
    },
  },
});

export { theme };
