import React from "react";

const FashionTipsCarousel = () => {
  const fashionTips = [
    {
      tip: "Mix and match different patterns for a bold look.",
      video:
        "https://videos.pexels.com/video-files/853800/853800-sd_640_360_25fps.mp4",
    },
    {
      tip: "Accessorize with statement jewelry to elevate any outfit.",
      video:
        "https://videos.pexels.com/video-files/3633003/3633003-sd_636_360_30fps.mp4",
    },
    {
      tip: "Find your own style by trying out different trends and discovering what suits you best.",
      video:
        "https://videos.pexels.com/video-files/6784494/6784494-sd_640_360_24fps.mp4",
    },
    {
      tip: "Invest in classic pieces like a tailored blazer or little black dress.",
      video:
        "https://videos.pexels.com/video-files/6764958/6764958-sd_640_360_25fps.mp4",
    },
    {
      tip: "Experiment with layering to add depth to your outfit.",
      video:
        "https://videos.pexels.com/video-files/7157465/7157465-sd_640_360_24fps.mp4",
    },
    {
      tip: "Pay attention to fabric care labels to keep your clothes looking new.",
      video:
        "https://videos.pexels.com/video-files/6120425/6120425-sd_960_506_25fps.mp4",
    },
  ];

  return (
    <div style={styles.carouselContainer}>
      <h2 style={styles.carouselHeading}>Fashion Tips</h2>
      <div style={styles.carousel}>
        {fashionTips.map((tipData, index) => (
          <div key={index} style={styles.carouselItem}>
            <video style={styles.video} autoPlay loop muted>
              <source src={tipData.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div style={styles.contentOverlay}>
              <p style={styles.tipText}>{tipData.tip}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  carouselContainer: {
    width: "80vw", // Full width of viewport
    // margin: '0 auto',
    paddingLeft: "10%",
    boxSizing: "border-box",
    
  },
  carouselHeading: {
    fontSize: "2rem",
    textAlign: "center",
    marginBottom: "20px",
  },
  carousel: {
    display: "flex",
    overflowX: "auto",
    scrollSnapType: "x mandatory",
    WebkitOverflowScrolling: "touch",
    scrollBehavior: "smooth",
    maxWidth: "70%",
    paddingLeft: "10%",
    paddingRight: "10%", 
    // Ensure it stretches to full width
  },
  carouselItem: {
    position: "relative",
    flex: "0 0 auto",
    width: "300px", // Adjust width as needed
    marginRight: "20px",
    marginBottom:'10px',
    scrollSnapAlign: "start",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  },
  video: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  contentOverlay: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "white",
    padding: "20px",
    background: "rgba(0, 0, 0, 0.5)",
    width: "100%",
    boxSizing: "border-box",
    
  },
  tipText: {
    fontSize: "1.2rem",
    margin: "0",
  },
};

export default FashionTipsCarousel;
