import React from 'react';
import image from './image.jpeg';
const Home = () => (
  <div style={styles.container}>
    <h1 style={styles.heading}>Welcome to Fashion Fusion!</h1>
    <p style={styles.paragraph}>
      Explore exclusive fashion content, participate in quizzes, check your leaderboard position, share your style, and join virtual fashion events.
    </p>
    <div style={styles.imageContainer}>
      <img src={image} alt="Fashion " style={styles.image} />
    </div>
  </div>
);

const styles = {
  container: {
    maxWidth: '800px',
    margin: 'auto',
    textAlign: 'center',
    padding: '20px',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    color: '#666',
  },
  imageContainer: {
    marginTop: '20px',
  },
  image: {
    width: '100%',
    maxWidth: '400px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
};

export default Home;
