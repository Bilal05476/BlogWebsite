import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import "./css/Secondary.css";

const SecondaryHead = () => {
  return (
    <div className="secondary__head">
      <div className="container">
        <h6>March 6, 2021</h6>
        <div className="secondary__icons">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
        </div>
      </div>
    </div>
  );
};

export default SecondaryHead;
