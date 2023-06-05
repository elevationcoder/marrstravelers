import React from 'react';
import design from '../styles/AdventureCard.module.css';
import { Link } from 'react-router-dom';

const AdventureCard = ({ title, description, image, postId }) => {
  const cardStyle = {
    backgroundImage: `url(${image})`,
    objectFit: "cover"
  };

  return (
    <Link to={`/adventures/${postId}`} className={design.cardLink}>
      <div className={design.adventureCard}>
        <div className={design.innerCard}>
          <div className={design.cardFront} style={cardStyle}>
            <div className={design.cardContent}>
              <div className={design.cardContentInner}>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          </div>
          <div className={design.cardBack}>
            <div className={design.cardBackShadow}>
              <p>{description}</p>
              <h3>{title}</h3>
              {/* Additional content */}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AdventureCard;
