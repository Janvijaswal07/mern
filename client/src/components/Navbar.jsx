import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">
          <a href="/">Logo</a>
        </div>
        <nav>
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/services'>Services</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
            <li><NavLink to='/register'>signup</NavLink></li>
            <li><NavLink to='/login'>login</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
