import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";

// A custom theme for this app
const theme = createTheme({
  components: {
    // MuiMenu: {
    //   styleOverrides: {
    //     // paper: {
    //     //   backgroundColor: arcBlue,
    //     //   color: arcBlue,
    //     //   borderRadius: "0px",
    //     // },
    //   },
    // },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "white",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: "white",
          textDecorationColor: "white",
          opacity: 0.7,
          "&:hover": {
            opacity: 1,
          },
          "&.Mui-selected": {
            color: "white",
          },
        },

        // selected: { color: "white" },
        // textColorSecondary: "white",
      },
    },
  },
  palette: {
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
    error: {
      main: red.A400,
    },
  },
  // custom: {
  //   typography: {
  //     tab: {
  //       fontFamily: "Raleway",
  //       textTransform: "none",
  //       fontWeight: 700,
  //       fontSize: "1rem",
  //       minWidth: 10,
  //       color: "white",
  //       ml: "25px",
  //     },
  //   },
  // },
});

export default theme;
