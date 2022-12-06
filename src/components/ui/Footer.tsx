import { Grid, SxProps } from "@mui/material";
import theme from "../../theme";
import footerAdornment from "../../assets/Footer Adornment.svg";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

const styles: {
  footer: SxProps;
  adornment: SxProps;
  mainContainer: SxProps;
  link: SxProps;
  gridItem: SxProps;
} = {
  footer: {
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    height: "12em",
    zIndex: 1302,
    position: "relative",
    [theme.breakpoints.down("md")]: { height: "10em" },
    [theme.breakpoints.down("sm")]: { height: "7em" },
  },
  adornment: {
    verticalAlign: "bottom",
    height: "12em",
    [theme.breakpoints.down("md")]: { height: "10em" },
    [theme.breakpoints.down("sm")]: { height: "7em" },
    // mr: "3000px",
    // ml: "0px",
    // padding: "0px",
  },
  mainContainer: {
    position: "absolute",
    ml: "6em",
  },
  gridItem: { m: "3em" },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    "&:hover": { cursor: "pointer !important" },
  },
};

function Footer(props: any) {
  const navigate = useNavigate();
  return (
    <Box sx={styles.footer}>
      <Grid container sx={styles.mainContainer} justifyContent="center">
        <Grid item sx={styles.gridItem}>
          <Grid container spacing={2} direction="column">
            <Grid
              item
              onClick={() => {
                navigate("/");
                props.setCurrentTab(0);
              }}
              sx={styles.link}
            >
              Home
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={styles.gridItem}>
          <Grid container spacing={2} direction="column">
            <Grid
              item
              onClick={() => {
                navigate("/services");
                props.setCurrentTab(1);
                props.setSelectedIndex(0);
              }}
              sx={styles.link}
            >
              Services
            </Grid>
            <Grid
              item
              onClick={() => {
                navigate("/customsoftware");
                props.setCurrentTab(1);
                props.setSelectedIndex(1);
              }}
              sx={styles.link}
            >
              Custom Software Development
            </Grid>
            <Grid
              item
              onClick={() => {
                navigate("/mobileapps");
                props.setCurrentTab(1);
                props.setSelectedIndex(2);
              }}
              sx={styles.link}
            >
              Mobile App Development
            </Grid>
            <Grid
              item
              onClick={() => {
                navigate("/websites");
                props.setCurrentTab(1);
                props.setSelectedIndex(3);
              }}
              sx={styles.link}
            >
              Website Development
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={styles.gridItem}>
          <Grid container spacing={2} direction="column">
            <Grid
              item
              onClick={() => {
                navigate("/revolution");
                props.setCurrentTab(2);
              }}
              sx={styles.link}
            >
              The Revolution
            </Grid>
            <Grid
              item
              onClick={() => {
                navigate("/revolution");
                props.setCurrentTab(2);
              }}
              sx={styles.link}
            >
              Vision
            </Grid>
            <Grid
              item
              onClick={() => {
                navigate("/revolution");
                props.setCurrentTab(2);
              }}
              sx={styles.link}
            >
              Technology
            </Grid>
            <Grid
              item
              onClick={() => {
                navigate("/revolution");
                props.setCurrentTab(2);
              }}
              sx={styles.link}
            >
              Process
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={styles.gridItem}>
          <Grid container spacing={2} direction="column">
            <Grid
              item
              onClick={() => {
                navigate("/about");
                props.setCurrentTab(3);
              }}
              sx={styles.link}
            >
              About Us
            </Grid>
            <Grid
              item
              onClick={() => {
                navigate("/about");
                props.setCurrentTab(3);
              }}
              sx={styles.link}
            >
              History
            </Grid>
            <Grid
              item
              onClick={() => {
                navigate("/about");
                props.setCurrentTab(3);
              }}
              sx={styles.link}
            >
              Team
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={styles.gridItem}>
          <Grid container spacing={2} direction="column">
            <Grid
              item
              onClick={() => {
                navigate("/contact");
                props.setCurrentTab(4);
              }}
              sx={styles.link}
            >
              Contact Us
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box
        component="img"
        alt="black decorative"
        src={footerAdornment}
        sx={styles.adornment}
      />
    </Box>
  );
}

export default Footer;
