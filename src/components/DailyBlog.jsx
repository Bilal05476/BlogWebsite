import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { CardActionArea } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
  },
  media: {
    height: "300px",
    paddingTop: "56.25%", // 16:9
  },
  title: {
    color: "#fff",
    marginLeft: "1.5rem",
    marginRight: "1.5rem",
    fontStyle: "italic",
  },
  author: {
    color: "#fff",
    marginLeft: "1.8rem",
    fontStyle: "italic",
  },
}));

export default function DailyBlog(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea style={{ outline: "none" }} className="cardAction">
        <CardMedia className={classes.media} image={props.img}>
          <Typography className={classes.title} variant="h5">
            "{props.title}"
          </Typography>
          <Typography className={classes.author} variant="h5">
            ---{props.author}
          </Typography>
        </CardMedia>
      </CardActionArea>
    </Card>
  );
}
