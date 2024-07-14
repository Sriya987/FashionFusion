// import React from 'react';
// // import './SocialSharing.css';

// const SocialSharing = () => (
//   <div className="social-sharing">
//     <h2>Social Sharing</h2>
//     <p>Share your style and connect with others.</p>
//   </div>
// );

// export default SocialSharing;
import React from 'react';
import '../App.css';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';
import UserContentGrid from './UserContentGrid';
import socialsharing from '../Components/social-sharing1.jpeg';
import socialsharing2 from '../Components/social-sharing2.jpeg';
import socialsharing3 from '../Components/social-sharing3.jpeg';
import socialsharing4 from '../Components/social-sharing4.jpeg';
import socialsharing5 from '../Components/social-sharing5.jpeg';
const Socialsharing = ({ currentPageUrl, title }) => {
  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentPageUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentPageUrl)}&text=${encodeURIComponent(title)}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(currentPageUrl)}&description=${encodeURIComponent(title)}`,
    instagram: `https://instagram.com/`,
  };
  const userGeneratedContent = [
    { imageUrl: socialsharing2, username: '@fashionista1', description: 'Summer vibes!' },
    { imageUrl: socialsharing3, username: '@styleguru', description: 'Office chic' },
    { imageUrl:socialsharing4, username: '@trendsetter', description: 'Night out look' },
    { imageUrl: socialsharing5, username: '@fashionlover', description: 'Casual Sunday' },
  ];
  return (
    <div className="social-sharing-tab">
      <h3>Share this look</h3>
      <img style={{height:'200px',borderRadius:'25%',margin:'5px',marginLeft:'20px',boxShadow:'0px 0px 10px 6px'}} src={socialsharing} alt='social' />
      <div className="share-buttons">
        <button  style={{background:'#ffffff70',margin:'10px',borderRadius:'7px'}}><a href={shareUrls.facebook} target="_blank" style={{padding:'7px',color:'black',textDecoration:'none'}} rel="noopener noreferrer" className="share-button facebook">
          <FaFacebook /> Share on Facebook
        </a></button>
        <button style={{background:'#ffffff70',margin:'10px',borderRadius:'7px'}}><a href={shareUrls.twitter} target="_blank" style={{padding:'7px',color:'black',textDecoration:'none'}} rel="noopener noreferrer" className="share-button twitter">
          <FaTwitter /> Tweet
        </a></button>
        <button style={{background:'#ffffff70',margin:'10px',borderRadius:'7px'}}><a href={shareUrls.pinterest} target="_blank" style={{padding:'7px',color:'black',textDecoration:'none'}} rel="noopener noreferrer" className="share-button pinterest">
          <FaPinterest /> Pin it
        </a></button>
        <button style={{background:'#ffffff70',margin:'10px',borderRadius:'7px'}}><a href={shareUrls.instagram} target='_blank'  style={{padding:'7px',color:'black',textDecoration:'none'}} rel="noopener noreferrer" className="share-button instagram">
          <FaInstagram /> Share on Instagrams
        </a></button>
      </div>
      
      <div className="user-content-showcase">
        {/* <h4>User Styles</h4> */}
        <div className="user-content-showcase">
        <h4>User Styles</h4>
        <UserContentGrid userContent={userGeneratedContent} />
      </div>
      </div>
      
      <div className="social-feed">
        <h4>Latest from Instagram</h4>
        {/* Add an embedded Instagram feed here */}
      </div>
      
      <div className="hashtag-campaign">
        <h4>Join our campaign</h4>
        <p>Share your fusion style with #FashionFusionLook</p>
      </div>
    </div>
  );
};

export default Socialsharing;