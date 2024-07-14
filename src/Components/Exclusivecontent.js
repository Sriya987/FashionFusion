import React from 'react';
import { Link } from 'react-router-dom';
import FashionTipsCarousel from './Fashiontips'; // Assuming the correct import name for FashionTipsCarousel
import Tutorials from './Tutorials';
import '../App.css';
const ExclusiveContent = () => {
  return (
    <div className="exclusive-content-container">
      <div className="banner" style={bannerStyles}>
        {/* <img src={BannerImage} alt="Exclusive Content Banner" height={50} width={50} /> */}
        <div className="banner-overlay" style={overlayStyles}>
          <h1 style={headingStyles}>Exclusive Content</h1>
          <p style={paragraphStyles}>Get access to premium fashion tips, tutorials, and behind-the-scenes content.</p>
        </div>
      </div>

      <section className="content-section" style={contentSectionStyles}>
        <div className="category1" style={category1Styles}>
          {/* Center the FashionTipsCarousel */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <FashionTipsCarousel />
          </div>
        </div>
        <div className="category" style={{ ...categoryStyles, marginTop: '40px' }}>
          {/* <img src={TutorialsImage} alt="Tutorials" style={imageStyles} height={50} width={50} /> */}
          <h2 style={categoryHeadingStyles}>Tutorials</h2>
          <p style={categoryParagraphStyles}>Learn new fashion techniques and DIY projects through step-by-step tutorials.</p>
          <Tutorials/>
        </div>
        <div className="category" style={categoryStyles}>
          {/* <img src={BehindScenesImage} alt="Behind the Scenes" style={imageStyles} height={50} width={50} /> */}
          <h2 style={categoryHeadingStyles}>Behind the Scenes</h2>
          <p style={categoryParagraphStyles}>Go behind-the-scenes with exclusive interviews, backstage footage, and designer insights.</p>
        </div>
      </section>

      <section className="subscription" style={subscriptionStyles}>
        <h2 style={headingStyles}>Subscribe for More</h2>
        <p style={paragraphStyles}>Unlock all the exclusive content today. Subscribe now and join the fashion community!</p>
        <Link to="/signup" className="cta-button" style={buttonStyles}>Subscribe Now</Link>
      </section>
    </div>
  );
};

// Internal CSS styles
const bannerStyles = {
  position: 'relative',
  overflow: 'hidden',
};

const overlayStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  color: 'white',
};

const headingStyles = {
  fontSize: '3em',
  marginBottom: '0.5em',
};

const paragraphStyles = {
  fontSize: '1.2em',
  marginBottom: '1em',
};

const buttonStyles = {
  display: 'inline-block',
  padding: '10px 20px',
  backgroundColor: '#f44336',
  color: 'white',
  textDecoration: 'none',
  fontSize: '1.1em',
  borderRadius: '5px',
  transition: 'background-color 0.3s ease',
};

const contentSectionStyles = {
  display: 'flex',
  flexDirection: 'column', // Stack items vertically
  alignItems: 'center', // Center items horizontally
  marginTop: '40px',
};

const categoryStyles = {
  width: '50%', // Adjust width as needed
  textAlign: 'center',
  marginBottom: '20px',
  padding: '20px', // Add padding to separate content
  backgroundColor: '#f9f9f970', // Optional: Add a background color for better separation
  borderRadius: '10px', // Optional: Add rounded corners
};

const category1Styles = {
  width: '70%', // Adjust width as needed
  textAlign: 'center',
  marginBottom: '20px',
  padding: '20px', // Add padding to separate content
  backgroundColor: '#f9f9f940', 
  // Optional: Add a background color for better separation
  borderRadius: '10px', // Optional: Add rounded corners
};

const imageStyles = {
  borderRadius: '8px',
  marginBottom: '20px',
};

const categoryHeadingStyles = {
  fontSize: '1.8em',
  marginBottom: '0.5em',
};

const categoryParagraphStyles = {
  fontSize: '1.1em',
};

const subscriptionStyles = {
  marginTop: '40px',
  textAlign: 'center',
};

export default ExclusiveContent;
