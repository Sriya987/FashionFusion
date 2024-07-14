import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import fashionlogo from './fashionlogo.png'

const Signup = () => {
  const { isLoggedIn, handleLogin } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Reset error state

    // Basic password validation
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Simulate signup logic (replace with actual authentication)
    handleLogin(); // Example: Set tokens or state indicating user is logged in

    // Navigate to home page after successful signup
    navigate('/');
  };

  // Redirect to home if already logged in
  if (isLoggedIn) {
    navigate('/');
    return null; // Render nothing if already logged in
  }

  return (
    
    <div className="signup-container" style={styles.container}>
        <div className="navbar-brand">
    {/* <img src={fashionlogo} alt='logo' className="navbar-logo" /> */}
    <video style={{height:'60px',marginTop:'5px',borderRadius:'20px',display:'block',marginLeft:'auto',marginRight:'auto'}} autoPlay loop muted className="navbar-logo">
          {/* <source src={`${process.env.PUBLIC_URL}/FashionFusion.mp4`} type="video/mp4" /> */}
          <source src={`${process.env.PUBLIC_URL}/FashionFusion.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
  </div>
      <h2 style={styles.heading}>Sign Up</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          style={styles.input}
        />
        {error && <p className="error-message" style={styles.errorMessage}>{error}</p>}
        <button type="submit" style={styles.button}>Sign Up</button>
      </form>
      <p style={styles.loginText}>
        Already have an account? <Link to="/login" style={styles.loginLink}>Login</Link>
      </p>
    </div>
  );
};

// Internal CSS styles
const styles = {
  container: {
    // marginTop:'180px',
    // marginLeft:'490px',
    maxWidth: '350px',
    display:'block',
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:'5%',
    background:'#ffffff60',
    border: '1px solid #ccc',
    borderRadius: '5px',
    
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    marginBottom: '8%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginLeft:'8%',
    marginRight:'8%'
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
    margin:'8%'
  },
  errorMessage: {
    color: 'red',
    marginBottom: '10px',
  },
  loginText: {
    textAlign: 'center',
    marginTop: '20px',
    fontSize: '14px',
    color: '#666',
  },
  loginLink: {
    color: '#007bff',
    textDecoration: 'none',
    marginLeft: '5px',
  },
};

export default Signup;
