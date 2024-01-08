import React from 'react';

function Gallery({ images }) {
  return (
    <div className="gallery-grid">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
}

export default Gallery