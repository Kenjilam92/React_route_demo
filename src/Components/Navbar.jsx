import React from 'react';
import { Link } from '@reach/router';
const Navbar = (props) => {
  return (
    <div>
    <Link to = "/dashboard">Dashboard</Link>
    <Link to = "/login">Login</Link>
    </div>
  );
}

export default Navbar