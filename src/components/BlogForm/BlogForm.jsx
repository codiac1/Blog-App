import React, {useEffect, useState} from 'react';
import {useNavigate, Link} from "react-router-dom"
import { useDispatch,useSelector } from 'react-redux';
import { addBlog, editBlog } from '../../actions/blogActions';
import './BlogForm.css'
import { useParams } from 'react-router-dom';


const BlogForm = () => {
  const {id} = useParams();
  const blogs = useSelector((state) => state.blogReducer.blogs);
  const blogToEdit = blogs.find((blog) => blog.id === Number(id));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: '', 
  });

  useEffect(()=>{
    if(blogToEdit){
      setFormData({
        title: blogToEdit.title,
        content: blogToEdit.content,
        category: blogToEdit.category,
      });
    }
  }, [blogToEdit]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (blogToEdit) {
      dispatch(editBlog({ ...blogToEdit, ...formData }));
    } else {
      const newBlog = {
          id: Date.now(),
          ...formData,
          likes: 0
        }
      dispatch(
        addBlog(newBlog)
      );
    }
    const path = blogToEdit ? `/blog/${blogToEdit.id}` : `/`;
    navigate(path);

    setFormData({
      title: '', 
      content: '', 
      category: '' 
    }); 
  };

  return (
    <div className="blog-form-card">
      <div className="header">
        <h2>{blogToEdit ? 'Edit Blog' : 'Add Blog'}</h2>
      </div>
    <div className="form-div">
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            required
          />
        </div>

         <div>
          <label htmlFor="category">Category:</label>
          <select
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            required
          >
            <option value="">All Categories</option>
            <option value="Technology">Technology</option>
            <option value="Travel">Travel</option>
            <option value="Food">Food</option>
            <option value="Sports">Sports</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
            required
          />
        </div>
       
        <button type="submit" >
          {blogToEdit ? 'Save Changes' : 'Add Blog'}
        </button>
        <button><Link to="/" className='back-button'>
          <i className="fa fa-arrow-left"></i> Back
        </Link></button>
      </form>
    </div>
    </div>  
  );
};

export default BlogForm;
