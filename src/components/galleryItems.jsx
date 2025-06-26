import React from 'react';

const GalleryItem = ({ img, title }) => {
  return (
    <div className="gallery-item">
      <img src={img} alt={title} className="gallery-image" />
      <h3 className="gallery-title">{title}</h3>
    </div>
  );
};

export default GalleryItem;
