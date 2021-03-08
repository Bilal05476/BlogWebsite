import "./css/Primary.css";
import { NavLink } from "react-router-dom";
import SubjectIcon from "@material-ui/icons/Subject";
import Navigation from "./Navigation";

const PrimaryHead = () => {
  console.log(Navigation);
  return (
    <nav className="navbar navbar-expand-md navbar-dark primary__head">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <SubjectIcon fontSize="large" style={{ color: "#fff" }} />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="container">
          <ul className="navbar-nav">
            {/* {[
              "Home",
              "Blog",
              "ReactJs",
              "MERN Stack",
              "Firebase",
              "Bootstrap",
              "About",
              "Contact",
            ].map((item, ind) => {
              return (
                <li key={ind} className="nav-item">
                  <NavLink className="nav-link" to="/">
                    {item}
                  </NavLink>
                </li>
              );
            })} */}
            {Navigation.map((val, ind) => {
              return (
                <li key={ind} className="nav-item">
                  <NavLink className="nav-link" to={val.to}>
                    {val.nav}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default PrimaryHead;
