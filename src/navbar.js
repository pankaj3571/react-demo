import React from 'react'
import { Link } from 'react-router-dom'
function Nav() {
    const navStyle={
        color:'white'
    }
    return (
        <nav>
            <h3>Logo here</h3>
            <ul className="nav-link">
              <Link to='/about' style={navStyle}>
              <li>About us</li>
              
              </Link>
              <Link to="/contact" style={navStyle}>
              <li> Contact </li>
              
              </Link>

            </ul>
        </nav>
    );
}

export default Nav;
