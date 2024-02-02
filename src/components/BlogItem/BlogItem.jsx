import React from "react";
import { useDispatch } from "react-redux";
import { likeBlog } from "../../actions/blogActions";
import {Link} from 'react-router-dom'
import "./BlogItem.css"; 

const BlogItem = ({ blog }) => {
  const dispatch = useDispatch();

  const handleLikeClick = () => {
    dispatch(likeBlog(blog.id));
  };

  return (
    <div className="blog-item">
      <Link to= {`/blog/${blog.id}`} className="no-underline">
      <div className="blog-content" >
        <h3>{blog.title}</h3>
        <p className="truncate">{blog.content}</p>       
      </div>
      </Link>
      <p className="likes">
          <button onClick={handleLikeClick} className="like-button">
            Like{" : "}{blog.likes}
          </button>          
        </p>
    </div>
  );
};

export default BlogItem;
