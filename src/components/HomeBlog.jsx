// import Paper from "@material-ui/core/Paper";
// import Typography from "@material-ui/core/Typography";
import "./css/HomeBlog.css";
import BlogCard from "./BlogCard";
import DailyBlog from "./DailyBlog";

export default function HomeBlog() {
  return (
    <div className="blog__content">
      <div className="left__content">
        <div className="row m-3">
          <div className="col-md-12 mb-3">
            <BlogCard
              blogImg="http://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png"
              content="React 17 enables gradual React upgrades. When you upgrade from React 15 to 16 (or, this time, from React 16 to 17), you would usually upgrade your whole app at once. This works well for many apps. But it can get increasingly challenging if the codebase was written more than a few years ago and isn’t actively maintained. And while it’s possible to use two versions of React on the page, until React 17 this has been fragile and caused problems with events.
                We’re fixing many of those problems with React 17. This means that when React 18 and the next future versions come out, you will now have more options. The first option will be to upgrade your whole app at once, like you might have done before. But you will also have an option to upgrade your app piece by piece. For example, you might decide to migrate most of your app to React 18, but keep some lazy-loaded dialog or a subroute on React 17.
                This doesn’t mean you have to do gradual upgrades. For most apps, upgrading all at once is still the best solution. Loading two versions of React — even if one of them is loaded lazily on demand — is still not ideal. However, for larger apps that aren’t actively maintained, this option makes sense to consider, and React 17 lets those apps not get left behind."
              userName="Dan Abramov and Rachel Nabors"
              dateAndTime="October 20, 2020"
              title="React v17.0"
              userImg="https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"
              className=" p-3"
            />
          </div>
        </div>

        <div className="container text-center">
          <h2 className="py-3" style={{ fontWeight: "700" }}>
            Daily Updates
          </h2>
        </div>

        <div className="row m-3">
          <div className="col-md-3 mb-3">
            <DailyBlog content="lorem10" className=" p-3" />
          </div>
          <div className="col-md-3 mb-3">
            <DailyBlog content="lorem10" className=" p-3" />
          </div>
          <div className="col-md-3 mb-3">
            <DailyBlog content="lorem10" className=" p-3" />
          </div>
          <div className="col-md-3 mb-3">
            <DailyBlog content="lorem10" className=" p-3" />
          </div>
        </div>

        <div className="row m-3">
          <div className="col-md-6 mb-3">
            <BlogCard
              blogImg="https://neilpatel.com/wp-content/uploads/2020/10/how-to-start-a-blog-featured-image.jpg"
              content=" Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
              userName="Bilal Ahmed"
              dateAndTime="March 07, 2021"
              title=" Lorem Ipsum has been the industry's 1500s!"
              userImg="https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"
              className=" p-3"
            />
          </div>
          <div className="col-md-6 mb-3 ">
            <BlogCard
              blogImg="https://neilpatel.com/wp-content/uploads/2020/10/how-to-start-a-blog-featured-image.jpg"
              content=" Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
              userName="Bilal Ahmed"
              dateAndTime="March 07, 2021"
              title=" Lorem Ipsum has been the industry's 1500s!"
              userImg="https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"
              className=" p-3"
            />
          </div>
        </div>
      </div>

      <div className="right__content">
        <div className="row m-3">
          <div className="col-md-12 mb-3">
            <BlogCard
              blogImg="https://neilpatel.com/wp-content/uploads/2020/10/how-to-start-a-blog-featured-image.jpg"
              content=" Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
              userName="Bilal Ahmed"
              dateAndTime="March 07, 2021"
              title=" Lorem Ipsum has been the industry's 1500s!"
              userImg="https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"
              className=" p-3"
            />
          </div>
          <div className="col-md-12 mb-3 ">
            <BlogCard
              blogImg="https://neilpatel.com/wp-content/uploads/2020/10/how-to-start-a-blog-featured-image.jpg"
              content=" Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
              userName="Bilal Ahmed"
              dateAndTime="March 07, 2021"
              title=" Lorem Ipsum has been the industry's 1500s!"
              userImg="https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"
              className=" p-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}