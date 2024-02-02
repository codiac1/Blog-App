import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link, Navigate } from 'react-router-dom';
import { deleteBlog, likeBlog } from '../../actions/blogActions';
import './BlogDetails.css'; 

const BlogDetails = () => {
  const { id } = useParams();
  const blog = useSelector((state) =>
    state.blogReducer.blogs.find((blog) => blog.id === Number(id))
  );

  const dispatch = useDispatch();

  if (!blog) {
    return <Navigate to= '/'/>
  }

  const handleLikeClick = () => {
    dispatch(likeBlog(blog.id));
  };

  const handleDeleteClick = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (confirmDelete) {
      dispatch(deleteBlog(blog.id));
      
    }
  };

  return (
    <div className="blog-details">
      <div className="header">
        <h2>{blog.title}</h2>
        <div className="action-buttons"> 
            <Link to={`/edit-blog/${blog.id}`} className="edit-button">
                <i className="fa fa-pencil"></i> 
            </Link>
            <button onClick={handleDeleteClick} className="delete-button">
                <i className="fa fa-trash"></i> 
            </button>
        </div>
      </div> 
      <p className='blog-content'>{blog.content}</p>      
      <p>Likes: {blog.likes}</p>
      <button onClick={handleLikeClick} className="like-button">
        <i className="fa fa-thumbs-up"></i> Likes: {blog.likes}
      </button>
      <Link to="/" className="go-back-button">
        <i className="fa fa-arrow-left"></i> Back
      </Link>
    </div>
  );
};

export default BlogDetails;
