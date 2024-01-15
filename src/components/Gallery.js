import React, { useState } from 'react';


function Gallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="gallery-image"
            onClick={() => openModal(image)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <img src={selectedImage.src} alt={selectedImage.alt} className="modal-content" />
          <span className="close">&times;</span>
        </div>
      )}
    </div>
  );
}



export default Gallery;