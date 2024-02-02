import React from 'react'
import { useLocation, Link} from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
    const location = useLocation();
    const shouldShowButton = !location.pathname.includes('/add-blog') && !location.pathname.includes('edit-blog');

    return (
    <>
      <div className="navbar">
        <div className="navbar_content">
          <p>Blog App</p>
          <Link to="/" className="no-underline"><p>Home</p></Link>          
        </div>
        {shouldShowButton && (
          <Link to="/add-blog">
            <button className="add_button">Add Blog</button>
          </Link>
        )}
      </div>
    </>
  );
};

export default Navbar;