import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
  services__component: {
    padding: "1.2rem",
    display: "flex",
    flexDirection: "column",
    color: "#fff",
    background:
      "linear-gradient(rgba(26, 38, 68, 0.8), rgba(26, 38, 68, 0.6)), url(https://www.esds.co.in/home-images/homepage/Security-Solutions-Services.webp) center no-repeat",
  },
  button: {
    backgroundImage: "linear-gradient(15deg, #13547a 0%, #80d0c7 100%)",
    color: "#fff",
    marginTop: "2rem",
    outline: "none !important",
    fontSize: "1.2rem",
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
      <Button variant="contained" className={classes.button}>
        FREE DEMO (START NOW)
      </Button>
    </Paper>
  );
};
export default ServicesCard;
