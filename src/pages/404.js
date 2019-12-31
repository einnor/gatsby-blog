import React from 'react';
import { Link } from 'gatsby';

export default () => (
  <div>
    <h1>Page not found</h1>
    <div>
      <Link to="/">Home</Link> | <Link to="/about">About Me</Link>
    </div>
    <p>
      The page you  are looking for does not exist!
    </p>
  </div>
);
