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
import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  TwitterShareButton,
} from "react-share";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  TwitterIcon,
  FacebookIcon,
  LinkedinIcon,
  WhatsappIcon,
  TelegramIcon,
} from "react-share";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
  },
  media: {
    paddingTop: "auto", // 16:9
  },
  title: {
    padding: "4rem",
    paddingTop: "10rem !important",
    fontWeight: "400",
    color: "#fff",
    backgroundImage:
      "linear-gradient(120deg, rgba(0,0,0,0.7), rgba(0,0,0,0.4))",
  },
}));

export default function BlogCard(props) {
  const classes = useStyles();
  const [counter, setCounter] = useState(0);

  const counterInc = () => {
    setCounter((prevCount) => prevCount + 1);
  };

  return (
    <Card className={classes.root}>
      <NavLink className="link" to={`/blog/${props.blogId}`}>
        <CardActionArea key={props.blogId} style={{ outline: "none" }}>
          <CardMedia
            className={`${classes.media} blogImage`}
            image={props.blogImg}
          >
            <Typography className={`${classes.title} blogTitle`} variant="h4">
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
              style={{ fontSize: "1.2rem" }}
            >
              {props.content} <span className="text-primary"> more....</span>
            </Typography>
          </CardContent>
        </CardActionArea>
      </NavLink>
      <CardActions disableSpacing style={{ overflowX: "auto" }}>
        <IconButton
          className="text-danger"
          aria-label="add to favorites"
          style={{ outline: "none" }}
          onClick={counterInc}
        >
          <FavoriteIcon /> <span className="mx-1">{counter}</span>
        </IconButton>

        <TwitterShareButton
          url={`http://localhost:3000/blog/${props.blogId}`}
          className="px-1"
          style={{ outline: "none" }}
        >
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
        <FacebookShareButton
          url={`http://localhost:3000/blog/${props.blogId}`}
          className="px-1"
          style={{ outline: "none" }}
        >
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <LinkedinShareButton
          url={`http://localhost:3000/blog/${props.blogId}`}
          className="px-1"
          style={{ outline: "none" }}
        >
          <LinkedinIcon size={32} round={true} />
        </LinkedinShareButton>
        <WhatsappShareButton
          url={`http://localhost:3000/blog/${props.blogId}`}
          className="px-1"
          style={{ outline: "none" }}
        >
          <WhatsappIcon size={32} round={true} />
        </WhatsappShareButton>
        <TelegramShareButton
          url={`http://localhost:3000/blog/${props.blogId}`}
          className="px-1"
          style={{ outline: "none" }}
        >
          <TelegramIcon size={32} round={true} />
        </TelegramShareButton>
      </CardActions>
    </Card>
  );
}
