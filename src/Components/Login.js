import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext'; 
import fashionlogo from './fashionlogo.png'// Adjust path as needed

const Login = () => {
  const { isLoggedIn, handleLogin } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLoginFormSubmit = (event) => {
    event.preventDefault();
    setError(''); // Reset error state

    // Simulate login logic (replace with actual authentication)
    if (username === 'testuser' && password === 'password') {
      handleLogin();
    } else {
      setError('Invalid username or password.');
    }
  };

  // Redirect to home if already logged in
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <style>
        {`
          body {
            font-family: Arial, sans-serif;
            background-color: #f0f2f5;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }
          .login-container {
            // background-color: #fff;
            padding: 20px 40px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            // width: 100%;
            // max-width: 400px;
            // text-align: center;
            maxWidth: '400px',
    display:'block',
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:'5%',
    background:'#ffffff60',
    border: '1px solid #ccc',
    borderRadius: '5px',
          }
          h2 {
            margin-bottom: 20px;
            color: #333;
          }
          form {
            display: flex;
            flex-direction: column;
          }
          input {
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 16px;
          }
          button {
            padding: 10px;
            margin: 20px 0;
            border: none;
            border-radius: 4px;
            background-color: #4CAF50;
            color: #fff;
            font-size: 16px;
            cursor: pointer;
          }
          button:hover {
            background-color: #45a049;
          }
          p {
            color: #777;
          }
          .error-message {
            color: red;
            margin: 10px 0;
          }
        `}
      </style>
      <div className="login-container" style={{display:'block',marginLeft:'auto',marginRight:'auto',background:'#ffffff60'}}>
      <div className="navbar-brand">
    {/* <img src={fashionlogo} alt='logo' className="navbar-logo" /> */}
    <video style={{height:'80px',borderRadius:'20px',display:'block',marginLeft:'auto',marginRight:'auto'}} autoPlay loop muted className="navbar-logo">
          {/* <source src={`${process.env.PUBLIC_URL}/FashionFusion.mp4`} type="video/mp4" /> */}
          <source src={`${process.env.PUBLIC_URL}/FashionFusion.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
  </div>
        <h2>Login</h2>
        <form onSubmit={handleLoginFormSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
