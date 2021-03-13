import { useParams } from "react-router";
import Query from "../../components/Query";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";

import ARTICLE_QUERY from "../../queries/article/article";

const Article = () => {
  let { id } = useParams();

  return (
    <Query query={ARTICLE_QUERY} slug={id}>
      {({ data: { articles } }) => {
        if (articles.length) {
          const imageUrl =
            process.env.NODE_ENV !== "development"
              ? articles[0].image.url
              : process.env.REACT_APP_BACKEND_URL + articles[0].image.url;

          return (
            <div className="container">
              <div className="card m-2 p-0">
                <img
                  className="card-img-top"
                  width="100%"
                  height="400px"
                  src={imageUrl}
                  alt="article"
                />
                <div className="card-body">
                  <div className="card-text">
                    <span className="badge badge-info my-2 py-2">
                      <Moment format="MMM Do YYYY">
                        {articles[0].published_at}
                      </Moment>
                    </span>
                    <h1 className="article__title">{articles[0].title}</h1>

                    <div className="">
                      <ReactMarkdown source={articles[0].description} />
                      <div className="">
                        <ReactMarkdown source={articles[0].content} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      }}
    </Query>
  );
};

export default Article;
