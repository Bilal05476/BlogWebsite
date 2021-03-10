import "./css/HomeBlog.css";
import BlogCard from "./BlogCard";
import BlogPost from "./BlogPost.json";

const Blog = () => {
  return (
    <div className="blog__content">
      <div className="row m-3">
        {Object.keys(BlogPost).map((item) => {
          const data = BlogPost[item];
          const desc = data.content.slice(0, 150);
          return (
            <div className="col-md-4 mb-3" key={data.id}>
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
  );
};

export default Blog;
