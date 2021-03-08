import SearchIcon from "@material-ui/icons/Search";
import "./css/BrandHead.css";
import InputBase from "@material-ui/core/InputBase";
import SubsModal from "./SubsModal";

const BrandHeader = () => {
  return (
    <div className="brand__header">
      <div className="subscribes__action d-none d-md-block">
        <SubsModal />
      </div>
      <div className="logo">
        <img
          src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png"
          width="80px"
          height="50px"
          alt=""
        />
      </div>
      <div className="searchbar">
        <div className="searchIcon">
          <SearchIcon />
        </div>
        <InputBase
          className="input"
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </div>
    </div>
  );
};

export default BrandHeader;
