import { useState } from 'react';
import '../styles/slideshow.scss';
import arrowLeft from '../assets/Arrow-left.svg';
import arrowRight from '../assets/Arrow-right.svg';

export default function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = pictures.length;

  if (length === 0) return null;

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="slideshow">
      <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slide-image" />

      {length > 1 && (
        <>
          <button className="arrow left" onClick={prevSlide}>
            <img src={arrowLeft} alt="Précédent" />
          </button>
          <button className="arrow right" onClick={nextSlide}>
            <img src={arrowRight} alt="Suivant" className="flipped" />
          </button>
          <div className="pagination">{currentIndex + 1}/{length}</div>
        </>
      )}
    </div>
  );
}
