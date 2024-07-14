import React from 'react';
import img from './image.jpeg';
import img3 from './img3.jpeg';
import img4 from './img4.jpeg';
import img5 from './img5.jpeg';
export default function Tutorials(){
  // Static tutorial data
  const tutorials = [
    {
      id: 1,
      title: "Mixing Patterns Like a Pro",
      description: "Learn the art of combining different patterns in your outfit.",
      thumbnailUrl: img,
    },
    {
      id: 2,
      title: "Upcycling Old Jeans",
      description: "Turn your old denim into fashionable new pieces.",
      thumbnailUrl: img3
    },
    {
      id: 3,
      title: "Perfect Office Look",
      description: "Create stylish and professional outfits for work.",
      thumbnailUrl: img4
    },
    {
      id: 4,
      title: "Sustainable Fashion Guide",
      description: "Tips for building an eco-friendly wardrobe.",
      thumbnailUrl: img5
    }
  ];

  return (
    <div className="tutorials-section">
      <h2>Fashion Fusion Tutorials</h2>
      <div className="tutorial-grid">
        {tutorials.map((tutorial) => (
          <TutorialCard key={tutorial.id} tutorial={tutorial} />
          
        ))}
      </div>
    </div>
  );
};

const TutorialCard = ({ tutorial }) => {
  return (
    <div className="tutorial-card">
      <img style={{height:'200px',width:'200px'}} src={tutorial.thumbnailUrl} alt={tutorial.title} />
      <h3>{tutorial.title}</h3>
      <p>{tutorial.description}</p>
      <a href={`/tutorials/${tutorial.id}`}>Read More</a>
     
    </div>
  );
};



