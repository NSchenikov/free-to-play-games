import React, { useState } from 'react';
import { ScreenshotItem } from '../../features/api/apiSlice';
import './carousel.css';

interface CarouselProps {
  images: ScreenshotItem[];
}

export const Carousel: React.FC<CarouselProps> = ({images}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  if (!images || images.length === 0) return <div>No images available.</div>;

  return (
<div className="carousel">
  <button className="carousel-button left-button" onClick={prevSlide}>
    &lt;
  </button>
  <img src={images[currentIndex].image} alt={`Slide ${currentIndex + 1}`} className="carousel-image" />
  <button className="carousel-button right-button" onClick={nextSlide}>
    &gt; 
  </button>
</div>
  );
};

export default Carousel;