import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from '../styles/AdventureCardContainer.module.css';

const AdventureCardContainer = ({ children }) => {
  const containerRef = useRef(null);

  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -containerRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: containerRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.scrollButtonLeft} onClick={handleScrollLeft}>
        <FaChevronLeft className={styles.scrollIcon} />
      </div>
      <div className={styles.cardsContainer} ref={containerRef}>
        <div className={styles.cards}>{children}</div>
      </div>
      <div className={styles.scrollButtonRight} onClick={handleScrollRight}>
        <FaChevronRight className={styles.scrollIcon} />
      </div>
    </div>
  );
};

export default AdventureCardContainer;
