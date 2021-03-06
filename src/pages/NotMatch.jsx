//import plugin
import React from 'react';
import { Link } from 'react-router-dom';

//import style
import '../styles/notmatch.css';

// untuk mengembalikan respon saat tidak ditemukan page yang sesuai
const NotMatch = props => {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>Oops!</h1>
        </div>
        <h2>404 - Page not found</h2>
        <p>
          The page you are looking for might have been removed had its name changed or is
          temporarily unavailable.
        </p>
        <Link to="/" className="nav-link">
          {' '}
          Go To Homepage
        </Link>
      </div>
    </div>
  );
};

//mengeksport className NotMatch ke main-route.js/
export default NotMatch;
