import Query from "../Query";
import { Link } from "react-router-dom";
import CATEGORIES_QUERY from "../../queries/category/categories";
import "../css/Primary.css";
import SubjectIcon from "@material-ui/icons/Subject";

const Nav = () => {
  return (
    <div>
      <Query query={CATEGORIES_QUERY} id={null}>
        {({ data: { categories } }) => {
          return (
            <>
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
                      <li className="nav-item">
                        <Link to="/" className="nav-link">
                          Blogs
                        </Link>
                      </li>
                      {categories.map((category) => {
                        return (
                          <>
                            <li className="nav-item" key={category.slug}>
                              <Link
                                to={`/category/${category.slug}`}
                                className="nav-link"
                              >
                                {category.name}
                              </Link>
                            </li>
                          </>
                        );
                      })}
                      <li className="nav-item">
                        <Link to="/contact" className="nav-link">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </>
          );
        }}
      </Query>
    </div>
  );
};

export default Nav;
