import { useParams } from "react-router";
import Articles from "../../components/Articles";
import Query from "../../components/Query";
import CATEGORY_ARTICLES_QUERY from "../../queries/category/articles";

const Category = () => {
  let { id } = useParams();

  return (
    <Query query={CATEGORY_ARTICLES_QUERY} slug={id}>
      {({ data: { categories } }) => {
        if (categories.length) {
          return (
            <div>
              <div className="">
                <div className="">
                  <Articles articles={categories[0].articles} />
                </div>
              </div>
            </div>
          );
        }
      }}
    </Query>
  );
};

export default Category;
