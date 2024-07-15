import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext'; // Adjust path as needed
import './Navbar.css';
// import fashionlogo from './fashionlogo.png';
import '../App.css';

const Navbar = () => {
  const { isLoggedIn, handleLogout } = useContext(AuthContext);

  return (
    <nav className="navbar" style={{background: 'linear-gradient(to right,  rgb(245, 4, 169), white,rgb(17, 17, 165))'}}>
      <div className="navbar-brand">
        {/* <img src={fashionlogo} alt='logo' className="navbar-logo" /> */}
        <video style={{height:'80px',borderRadius:'20px'}} autoPlay loop muted className="navbar-logo">
          {/* <source src={`${process.env.PUBLIC_URL}/FashionFusion.mp4`} type="video/mp4" /> */}
          <source src={`${process.env.PUBLIC_URL}/FashionFusion.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <ul className="navbar-links">
        <li className='navicons'><Link to="/">Home</Link></li>
        <li className='navicons'><Link to="/exclusive-content">Exclusive Content</Link></li>
        <li className='navicons'><Link to="/quizzes">Quizzes</Link></li>
        {/* <li className='navicons'><Link to="/tabs">Tabs</Link></li> */}
        {/* <li className='navicons'><Link to="/leaderboard">Leaderboard</Link></li> */}
        <li className='navicons'><Link to="/social-sharing">Social Sharing</Link></li>
        <li className='navicons'><Link to="/events">Events</Link></li>
        {isLoggedIn ? (
          <li className='navicons' style={{textDecoration:'none',paddingBottom:'5px'}}><button style={{background:'#ffffff10'}} onClick={handleLogout}>Logout</button></li>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
