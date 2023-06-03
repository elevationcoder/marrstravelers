import React from 'react';
import design from '../styles/About.module.css';
import PageHeader from '../components/PageHeader';
const About = () => {
  return (
    <div className={design.About} id="about">
      <PageHeader title={"Who We Are"} />
      <div className={design.Container}>
        <div className={design.Text}>
          <h2>This is who we are</h2>
        </div>
      </div>
    </div>
  );
}

export default About;