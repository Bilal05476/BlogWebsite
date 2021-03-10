import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ServicesModal from "./ServicesModal";

const useStyles = makeStyles(() => ({
  services__component: {
    padding: "1.2rem",
    display: "flex",
    flexDirection: "column",
    color: "#fff",
    background:
      "linear-gradient(rgba(26, 38, 68, 0.8), rgba(26, 38, 68, 0.6)), url(https://www.esds.co.in/home-images/homepage/Security-Solutions-Services.webp) center no-repeat",
  },
}));

const ServicesCard = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.services__component}>
      <Typography
        className="text-center"
        variant="h4"
        style={{ fontStyle: "italic", marginBottom: "2rem" }}
      >
        Services
      </Typography>
      <Typography variant="h5" style={{ marginLeft: "1.2rem" }}>
        Contact for <br />
        <strong style={{ fontWeight: "900" }}>FREE</strong>
        <br /> (Demo Website)
      </Typography>
      <ServicesModal />
    </Paper>
  );
};
export default ServicesCard;
