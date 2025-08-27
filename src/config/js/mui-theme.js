import { createTheme } from "@mui/material";
import { COLOR } from "./color";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 230,
      md: 892,
      lg: 1200,
      xl:1400,
    },
  },
  typography: {
    h2: {
      fontFamily: ["Space Grotesk", "sans-serif"].join(","),
      fontWeight: 500,
    },
    h6: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: COLOR.buttonColor,
          paddingX: "21px",
          paddingY: "13px",
          fontFamily: ["Space Grotesk", "sans-serif"].join(","),
          fontWeight: 500,
        },
        outlined: {
          borderColor: COLOR.buttonColor,
          color: COLOR.buttonColor,
          fontWeight:700,
        },
      },
    },
  },
});
