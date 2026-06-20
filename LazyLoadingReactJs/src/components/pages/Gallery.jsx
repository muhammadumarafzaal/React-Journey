import React from 'react';

/**
 * Gallery Component
 * Lazy loading this component is particularly useful if it contains many 
 * large assets or heavy libraries (like a lightbox or carousel).
 */
const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
  ];

  return (
    <div className="container animate-fade-in">
      <div className="page-content">
        <h1>Visual Gallery</h1>
        <p>This gallery was loaded only when you clicked the Gallery link.</p>
        
        <div className="gallery-grid">
          {images.map((src, index) => (
            <div key={index} className="gallery-card glass">
              <img src={src} alt={`Nature ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
