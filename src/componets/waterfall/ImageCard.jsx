// src/components/ImageCard.jsx
import React from 'react';
import './ImageCard.css';
import waterfallImage from '../../assets/waterfall.jpg';

const ImageCard = () => {
  return (
    <div className="image-card">
      <img src={waterfallImage} alt="Waterfall" className="image-card__img" />
      <div className="image-card__content">
        <h3 className="image-card__title">Beautiful Waterfall</h3>
        <p className="image-card__text">
          Experience the serene beauty of a cascading waterfall.
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
