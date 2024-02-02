import React, { createContext, useContext, useReducer} from 'react';
import blogReducer from '../reducers/blogReducer';

const BlogContext = createContext();

export const BlogProvider = ({children}) => {
    const [state, dispatch] = useReducer(blogReducer, {
        blog:[],
    });

    return (
        <BlogContext.Provider value = {{state, dispatch}}>
            {children}
        </BlogContext.Provider>
    );
};

export const useBlogContext = () => {
    return useContext(BlogContext);
};
