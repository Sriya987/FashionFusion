import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import ExclusiveContent from './Components/Exclusivecontent';
import Quizzes from './Components/Quizzes';
import Leaderboard from './Components/Leaderboard';
import SocialSharing from './Components/Socialsharing';
import EventCollab from './Components/Eventcollab';
import Login from './Components/Login';
import Signup from './Components/Signup';
import AuthProvider, { AuthContext } from './Components/AuthContext'; // Adjust path as needed
import './App.css';
// import Tabs from './Components/Tabs';

function App() {
  return (
    <AuthProvider>
      <Router basename='/FashionFusion'>
        <Routes>
          {/* Routes without Navbar */}
          <Route path="/login" element={<LoginWithoutNavbar />} />
          <Route path="/signup" element={<SignupWithoutNavbar />} />
          
          {/* Routes with Navbar */}
          <Route element={<PrivateRouteWithNavbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/exclusive-content" element={<ExclusiveContent />} />
            <Route path="/quizzes" element={<Quizzes />} />
            <Route path="/social-sharing" element={<SocialSharing />} />
            <Route path="/events" element={<EventCollab />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

function PrivateRouteWithNavbar({ children }) {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn ? (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/exclusive-content" element={<ExclusiveContent />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/social-sharing" element={<SocialSharing />} />
        <Route path="/events" element={<EventCollab />} />
      </Routes>
    </>
  ) : (
    <Navigate to="/login" />
  );
}


function LoginWithoutNavbar() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

function SignupWithoutNavbar() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
