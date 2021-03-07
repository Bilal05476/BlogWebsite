import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function DailyBlog(props) {
  const classes = useStyles();

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164153/8_big22-768x591.png"
      >
        <Typography variant="h3">{props.title}</Typography>
      </CardMedia>
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          style={{ fontSize: "1.2rem" }}
        >
          {props.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton style={{ outline: "none" }} aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton style={{ outline: "none" }} aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
