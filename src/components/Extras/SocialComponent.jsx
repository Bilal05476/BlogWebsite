import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  social__component: {
    padding: "1.2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#424242",
    color: "#fff",
    boxShadow: "1rem 2rem 5rem #212121",
    borderRadius: "1rem",
  },
  readers: {
    fontWeight: 800,
    fontFamily: "sans-serif",
  },
  social: {
    letterSpacing: ".2rem",
    marginTop: "1.2rem",
    textAlign: "center",
  },
  social__icons: {
    marginTop: "1.2rem",
  },

  instagram: {
    fontSize: "2.2rem",
    backgroundImage: "linear-gradient(15deg, #13547a 0%, #80d0c7 100%) ",
    color: "#fff",
    padding: ".2rem",
    borderRadius: "2rem",
  },
  facebook: {
    fontSize: "2.2rem",
    backgroundImage: "linear-gradient(15deg, #13547a 0%, #80d0c7 100%) ",
    color: "#fff",
    padding: ".2rem",
    borderRadius: "2rem",
  },
  linkedin: {
    fontSize: "2.2rem",
    backgroundImage: "linear-gradient(15deg, #13547a 0%, #80d0c7 100%) ",
    color: "#fff",
    padding: ".2rem",
    borderRadius: "2rem",
  },
  email: {
    fontSize: "2.2rem",
    backgroundImage: "linear-gradient(15deg, #13547a 0%, #80d0c7 100%) ",
    color: "#fff",
    padding: ".2rem",
    borderRadius: "2rem",
  },
  twitter: {
    fontSize: "2.2rem",
    backgroundImage: "linear-gradient(15deg, #13547a 0%, #80d0c7 100%) ",
    color: "#fff",
    padding: ".2rem",
    borderRadius: "2rem",
  },
}));

const SocialComponent = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.social__component}>
      <Typography variant="h5" className={classes.readers}>
        Over 100+ Readers
      </Typography>
      <Typography variant="body2" className={classes.social}>
        Get in touch with our social network
      </Typography>
      <div className={classes.social__icons}>
        <IconButton style={{ outline: "none" }}>
          <FacebookIcon className={classes.facebook} />
        </IconButton>
        <IconButton style={{ outline: "none" }}>
          <InstagramIcon className={classes.instagram} />
        </IconButton>
        <IconButton style={{ outline: "none" }}>
          <LinkedInIcon className={classes.linkedin} />
        </IconButton>
        <IconButton style={{ outline: "none" }}>
          <EmailIcon className={classes.email} />
        </IconButton>
        <IconButton style={{ outline: "none" }}>
          <TwitterIcon className={classes.twitter} />
        </IconButton>
      </div>
    </Paper>
  );
};
export default SocialComponent;
