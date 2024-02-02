import {
  ADD_BLOG,
  EDIT_BLOG,
  DELETE_BLOG,
  LIKE_BLOG,
  GET_BLOGS,
  FILTER_BY_CATEGORY,
  SEARCH_BLOGS,
} from "../actions/blogActionTypes";
import { getBlogsFromStorage, saveBlogsToLocalStorage} from "../data/blogStorage"; // Import your storage function

const initialState = {
  blogs: getBlogsFromStorage(),
};

const blogReducer = (state = initialState, action) => {
    switch(action.type){
      case GET_BLOGS:
        const blogsFromStorage = getBlogsFromStorage();
        return {
          ...state,
          blogs: blogsFromStorage,
        };
        
      case ADD_BLOG:
          const updatedBlogs = [...state.blogs, action.payload];
          saveBlogsToLocalStorage(updatedBlogs);
            return {
                ...state,
                blogs : updatedBlogs,
            };

      case EDIT_BLOG:
        const editedBlogs = state.blogs.map((blog) => 
          blog.id === action.payload.id ? action.payload : blog
          );
        saveBlogsToLocalStorage(editedBlogs);
        return {
          ...state,
          blogs: editedBlogs,
        };

      case DELETE_BLOG:
        const updatedBlogsAfterDelete = state.blogs.filter((blog) => 
          blog.id !== action.payload
          );
        saveBlogsToLocalStorage(updatedBlogsAfterDelete);
        return {
          ...state,
          blogs: updatedBlogsAfterDelete,
        };

      case LIKE_BLOG:
        const updatedBlogsAfterLike  = state.blogs.map((blog) =>
          blog.id === action.payload
            ? { ...blog, likes: blog.likes + 1 }
            : blog
          );
        saveBlogsToLocalStorage(updatedBlogsAfterLike);
        return {
          ...state,
          blogs: updatedBlogsAfterLike,
        };

    default:
      return state;
  }
};

export default blogReducer;