import { Link } from "react-router-dom";
import Moment from "react-moment";

const Card = ({ article }) => {
  const imageUrl =
    process.env.NODE_ENV !== "development"
      ? article.image.url
      : process.env.REACT_APP_BACKEND_URL + article.image.url;

  return (
    <Link to={`/article/${article.slug}`} className="article__link">
      <div className="card-deck my-2">
        <div className="card my-2">
          <img
            className="card-img-top"
            height="200px"
            src={imageUrl}
            alt={article.image.url}
          />
          <div className="card-body">
            <span className="badge badge-info my-3">
              {article.category.name}
            </span>

            <h5 className="card-title">{article.title}</h5>
            <p className="card-text">{article.description.slice(0, 100)}...</p>
            <p className="card-text">
              <small className="text-light">
                <Moment format="MMM Do YYYY">{article.publishedAt}</Moment>
              </small>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
