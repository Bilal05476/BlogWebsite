import DetailBlogCard from "./DetailBlogCard";
import { useParams, NavLink } from "react-router-dom";
import { useState } from "react";

const BlogDetails = () => {
  const [detailBlog, setDetailBlog] = useState([]);
  const { path } = useParams();
  // const prod = AllProduct[path];

  // const id = prod.id;
  // const title = prod.title;
  // const img = prod.img;
  // const price = prod.price;

  return (
    <div className="blog__content">
      <div className="row m-3">
        <div className="col-md-4 mb-3">
          <DetailBlogCard
            blogImg={blogImage}
            content={blogContent}
            userName={blogUser}
            dateAndTime={blogDate}
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
