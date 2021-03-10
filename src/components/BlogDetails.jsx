import DetailBlogCard from "./DetailBlogCard";
import { useParams } from "react-router-dom";
// import { useState } from "react";
import Blog from "./BlogPost.json";

const BlogDetails = () => {
  // const [detailBlog, setDetailBlog] = useState([]);
  const { id } = useParams();
  const blog = Blog[id];
  const blogid = blog.id;
  const blogTitle = blog.title;
  const img = blog.blogImage;
  const blogContent = blog.content;
  const user = blog.username;
  const date = blog.datetime;

  return (
    <div className="blog__content">
      <div className="row m-3">
        <div className="col-md-4 mb-3">
          <DetailBlogCard
            id={blogid}
            blogImg={img}
            content={blogContent}
            userName={user}
            dateAndTime={date}
            title={blogTitle}
            userImg="https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"
            className=" p-3"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
