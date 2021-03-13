import Card from "../Card";
import ServicesCard from "../Extras/ServicesCard";
import SocialComponent from "../Extras/SocialComponent";
import SubscriptionForm from "../Extras/SubscriptionForm";

const Articles = ({ articles }) => {
  return (
    <div className="container-fluid articles__cards">
      <div className="row left">
        {articles.map((article, i) => {
          return (
            <div key={i} className="col-lg-5 col-md-6 col-12">
              <Card article={article} key={`article__${article.slug}`} />
            </div>
          );
        })}
      </div>
      <div className="row right my-4">
        <div className="col-md-12">
          <SocialComponent />
          <ServicesCard />
          <SubscriptionForm />
        </div>
      </div>
    </div>
  );
};

export default Articles;
