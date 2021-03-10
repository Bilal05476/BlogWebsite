// import Paper from "@material-ui/core/Paper";
// import Typography from "@material-ui/core/Typography";
import "./css/HomeBlog.css";
import BlogCard from "./BlogCard";
import DailyBlog from "./DailyBlog";
import SocialComponent from "./SocialComponent";
import ServicesCard from "./ServicesCard";
import SubscriptionForm from "./SubscriptionForm";
import Blog from "./BlogPost.json";

export default function HomeBlog() {
  return (
    <div className="blog__content">
      <div className="left__content">
        {/* Featured Blog */}
        <div className="row m-3">
          {Object.keys(Blog).map((item) => {
            // console.log(Blog[item].feature ? "Hello" : "");

            const data = Blog[item];
            const desc = data.content.slice(0, 150);
            console.log(data.feature);
            {
              data.feature === true && (
                <>
                  <div className="col-md-12 mb-3" key={data.id}>
                    <BlogCard
                      blogId={data.id}
                      blogImg={data.blogImage}
                      content={desc}
                      userName={data.username}
                      dateAndTime={data.datetime}
                      title={data.title}
                      userImg="https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"
                      className=" p-3"
                    />
                  </div>
                </>
              );
            }
          })}
        </div>

        {/* Deily Quotes */}
        <div className="container text-center">
          <h2 className="py-3" style={{ fontWeight: "700" }}>
            Daily Quotes
          </h2>
        </div>

        <div className="row m-3">
          <div className="col-md-12 mb-3 d-block d-md-none">
            <ServicesCard />
          </div>
          <div className="col-md-3 mb-3">
            <DailyBlog
              img="https://i.pinimg.com/originals/7a/cc/15/7acc1584594b6fc6b914489e0278dd58.jpg"
              title="everything you do in this life has the return good or bad"
              author="Bilal Ahmed"
              className=" p-3"
            />
          </div>
        </div>

        {/* Random Blogs */}
        <div className="row m-3">
          {Object.keys(Blog).map((item) => {
            const data = Blog[item];
            const desc = data.content.slice(0, 150);

            return (
              <div className="col-md-6 mb-3" key={data.id}>
                <BlogCard
                  blogId={data.id}
                  blogImg={data.blogImage}
                  content={desc}
                  userName={data.username}
                  dateAndTime={data.datetime}
                  title={data.title}
                  userImg="https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"
                  className=" p-3"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Side Addons */}
      <div className="right__content">
        <div className="row m-3">
          <div className="col-md-12 mb-3">
            <SocialComponent />
          </div>
          <div className="col-md-12 mb-3 d-none d-md-block">
            <ServicesCard />
          </div>
          <div className="col-md-12 mb-3 ">
            <SubscriptionForm />
          </div>
        </div>
      </div>
    </div>
  );
}
