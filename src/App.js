import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs } from './actions/blogActions';
import BlogList from './components/BlogList/BlogList';
import BlogDetails from './components/BlogDetails/BlogDetails';
import BlogForm from './components/BlogForm/BlogForm';
import { useNavbarContext } from './context/NavbarContext'; 
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';


function App() {
  const dispatch = useDispatch();
  const { isNavbarOpen , toggleNavbar} = useNavbarContext();

  useEffect(()=>{
    dispatch(getBlogs());
  }, [dispatch]);

  const blogs = useSelector((state) => state.blogReducer.blogs);

  return (
    <Router>
      <div className="container"> 
        {/*{isNavbarOpen && (<button onClick={toggleNavbar}>Toggle</button>)}*/}
        <Navbar/> 
        <Routes>
          <Route path= "/" element={<BlogList />} />
          <Route path= "/blog/:id" element= {<BlogDetails />} />
          <Route path= "/add-blog" element= {<BlogForm />} />
          <Route path= "/edit-blog/:id" element= {<BlogForm />} />
          <Route path="/blog/:id" element= {<BlogDetails/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
