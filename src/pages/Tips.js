import React from 'react';
import design from '../styles/Tips.module.css';
import PageHeader from '../components/PageHeader';
const Tips = () => {
  return (
    <div className={design.Tips} id="tips">
      <PageHeader title={"Tips"} />
      <div className={design.Container}>
        <div className={design.Text}>
          <h2>Helpful tips!</h2>
        </div>
      </div>
    </div>
  );
}

export default Tips;