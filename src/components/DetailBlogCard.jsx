import { makeStyles } from "@material-ui/core/styles";
import "./css/HomeBlog.css";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
  },
  media: {
    paddingTop: "auto", // 16:9
  },
  title: {
    padding: "4rem",
    paddingTop: "13rem !important",
    fontWeight: "400",
    color: "#fff",
    backgroundImage:
      "linear-gradient(120deg, rgba(0,0,0,0.7), rgba(0,0,0,0.4))",
  },
}));

export default function DetailBlogCard(props) {
  const classes = useStyles();
  const [counter, setCounter] = useState(0);

  const counterInc = () => {
    setCounter((prevCount) => prevCount + 1);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea style={{ outline: "none" }}>
        <CardMedia className={classes.media} image={props.blogImg}>
          <Typography className={`${classes.title} blogTitle`} variant="h3">
            {props.title}
          </Typography>
        </CardMedia>
        <CardHeader
          avatar={<Avatar alt="user" src={props.userImg} />}
          title={props.userName}
          subheader={props.dateAndTime}
        />
        <CardContent>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ fontSize: "1.8rem" }}
          >
            {props.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <IconButton
          className=" text-danger"
          aria-label="add to favorites"
          style={{ outline: "none" }}
          onClick={counterInc}
        >
          <FavoriteIcon /> <span className="mx-1">{counter}</span>
        </IconButton>

        <IconButton aria-label="share" style={{ outline: "none" }}>
          <ShareIcon className="text-success" />
        </IconButton>
      </CardActions>
    </Card>
  );
}
