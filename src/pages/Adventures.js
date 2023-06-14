import React from 'react';
import design from '../styles/Adventures.module.css';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import adventuresData from '../adventuresData';
import AdventureCard from '../components/AdventureCard';
import AdventureCardContainer from '../components/AdventureCardContainer';

const Adventures = () => {
  const handleClick = () => {
    // Perform animation here
    // Navigate to the full blog post page
  };

  return (
    <div className={design.Adventures}>
      <PageHeader title={"Adventures"} />
      <div><p>Test Text</p></div>
      <div className={design.AdventuresContainer}>
        <AdventureCardContainer>
            {adventuresData.map((data, index) => (
              <motion.div
                key={index}
                className={design.adventureCard}
                onClick={handleClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: .2 }}
              >
                <AdventureCard
                  title={data.title}
                  // description={data.description}
                  image={data.image[0]}
                  postId={data.postId}
                />
              </motion.div>
            ))}
        </AdventureCardContainer>
      </div>
    </div>
  );
};

export default Adventures;
