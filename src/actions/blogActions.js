import {
  GET_BLOGS,
  ADD_BLOG,
  EDIT_BLOG,
  DELETE_BLOG,
  LIKE_BLOG,
} from "./blogActionTypes";

export const getBlogs = () => ({
  type: GET_BLOGS,
});

export const addBlog = (blog) => ({
  type: ADD_BLOG,
  payload: blog,
});

export const editBlog = (blog) => ({
  type: EDIT_BLOG,
  payload: blog,
});

export const deleteBlog = (blogId) => ({
  type: DELETE_BLOG,
  payload: blogId,
});

export const likeBlog = (blogId) => ({
  type: LIKE_BLOG,
  payload: blogId,
});

