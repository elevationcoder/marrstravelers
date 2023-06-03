import React from 'react';
import design from '../styles/Adventures.module.css';
import PageHeader from '../components/PageHeader';
const Adventures = () => {
  return (
    <div className={design.Adventures} id="adventures">
      <PageHeader title={"Adventures"} />
      <div className={design.Container}>
        <div className={design.Text}>
          <h2>Our Adventures</h2>
        </div>
      </div>
    </div>
  );
}

export default Adventures;