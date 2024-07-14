import React from 'react';

const UserContentGrid = ({ userContent }) => {
  return (
    <div className="user-content-grid">
      {userContent.map((content, index) => (
        <div key={index} className="user-content-item">
          <img src={content.imageUrl} alt={content.description} />
          <p>{content.username}</p>
          <p>{content.description}</p>
        </div>
      ))}
    </div>
  );
};

export default UserContentGrid;