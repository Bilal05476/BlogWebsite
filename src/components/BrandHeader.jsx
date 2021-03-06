import MailIcon from "@material-ui/icons/Mail";
import SearchIcon from "@material-ui/icons/Search";
import "./css/BrandHead.css";

const BrandHeader = () => {
  return (
    <div className="brand__header">
      <div className="subscribes__action">
        <button className="btn subsButton">
          <MailIcon /> &nbsp; SUBSCRIBE
        </button>
      </div>
      <div className="logo">LOGO</div>
      <div className="searchbar">
        <SearchIcon />
        <input
          type="text"
          className="form-control search"
          placeholder="search..."
        />
      </div>
    </div>
  );
};

export default BrandHeader;
