import React , {useState} from "react";
import {useSelector} from 'react-redux';
import BlogItem from '../BlogItem/BlogItem';
import "./BlogList.css";

const BlogList = () => {
  const blogs = useSelector((state) => state.blogReducer.blogs); 
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchKeyword , setSearchKeyword] = useState('');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  }

  const handleSearchChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  const filteredBlogs = selectedCategory ? blogs.filter((blog) =>
    blog.category === selectedCategory) 
    : blogs;

  const finalBlogs = searchKeyword ? filteredBlogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchKeyword.toLowerCase())
  ) : filteredBlogs;

  const sortedBlogs = [...finalBlogs].sort((a, b) => b.id - a.id);

  return (
    <div className="blog-list-container">
      <h2>Blog List</h2>
      <div className="filter-container">
        <select onChange={handleCategoryChange} className="category-filter">
          <option value="">All Categories</option>
          <option value="Technology">Technology</option>
          <option value="Travel">Travel</option>
          <option value="Food">Food</option>
          <option value="Sports">Sports</option>
        </select>

        <input
          type="text"
          placeholder="Search blogs..."
          value={searchKeyword}
          onChange={handleSearchChange}
          className="search-bar"
        />
      </div>

      <div className="blog-items">
        {sortedBlogs.map((blog) => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;