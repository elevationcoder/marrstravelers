import React from 'react';
import design from '../styles/About.module.css';
import PageHeader from '../components/PageHeader';
import profilePic from '../imgs/MarrsTravelersProfile.jpg'
import FamilyMountains from '../imgs/FamilyMountains.png'
import LizAndIVegas from '../imgs/LizAndIVegas.jpg'
import {motion} from 'framer-motion'
import World from '../imgs/world.png'
const About = () => {
  return (
    <div className={design.About} id="about">
      <PageHeader title={"Who We Are"} />
      <div className={design.Container}>
      <div className={design.EndStatement}>
        <p>
          <b>At MarrsTravelers, we're more than just your travel advisors; we're your partners in discovery. Join us, and let's explore the world together.</b>
        </p>
        <div className={design.WorldContainer}>
        <motion.img className={design.World} src={World} alt="Marrs Travelers - Liz & Ian"
          initial={{opacity: 0, scale:0, x:0, y: 0}}
          animate={{opacity: 1, scale:1, y: 0, rotate: 360}}
          transition={{duration: 2}}
        >
        </motion.img>
        </div>
      </div>
        <div className={design.Text}>
          <motion.img className={design.ProfilePic} src={profilePic} alt="Marrs Travelers - Liz & Ian"
            initial={{opacity: 0, scale:0, x:0, y: 0}}
            animate={{opacity: 1, scale:1, y: 0}}
            transition={{duration: 2}}
          >
          </motion.img>
          <motion.p className={design.TextOne}
            initial={{opacity: 0, scale:0, x:0, y: 0}}
            animate={{opacity: 1, scale:1, y: 0}}
            transition={{duration: 2}}
          >
            In the picturesque state of Colorado, nestled amidst the expansive landscapes and majestic mountains, is the home base of MarrsTravelers - a company built on the belief that travel should be accessible and affordable for all. We, Liz and Ian, the founders of MarrsTravelers, have always been passionate about exploration and discovery. Together, we've journeyed across 38 states and visited 4 distinct countries, savoring the rich tapestry of cultures, foods, and experiences that each destination offers. It was during these unforgettable adventures that we realized the joy and fulfillment that travel brings - and we knew we wanted to help others experience the same.
          </motion.p>
          <motion.p className={design.TextTwo}
            initial={{opacity: 0, scale:0, x:0, y: 0}}
            animate={{opacity: 1, scale:1, y: 0}}
            transition={{duration: 2}}
          >
            What makes us unique at MarrsTravelers is that we're not just travel advisors; we're travelers ourselves. We have firsthand experience of what it's like to travel with kids, to balance between seeking adventures and maintaining a budget. Our two wonderful children are our travel companions, sharing in the joy of discovery and growing through the myriad of experiences that our journeys offer. We understand the challenges that can arise, from balancing the needs of each family member to finding activities that are engaging for all ages. But we also know the immense value of these experiences, as we watch our children learn about the world through these firsthand encounters. In our travels, we've also developed a deep appreciation for a broad spectrum of foods and beverages from around the world, further enriching our travel experiences.
          </motion.p>
          <motion.img className={design.FamilyPic} src={FamilyMountains} alt="FamilyMountains"
            initial={{opacity: 0, scale:0, x:0, y: 0}}
            animate={{opacity: 1, scale:1, y: 0}}
            transition={{duration: 2}}
          >
          </motion.img>
          <motion.img className={design.VegasPic} src={LizAndIVegas} alt="LizAndIVegas"
            initial={{opacity: 0, scale:0, x:0, y: 0}}
            animate={{opacity: 1, scale:1, y: 0}}
            transition={{duration: 2}}
          >
          </motion.img>
          <motion.p className={design.TextThree}
            initial={{opacity: 0, scale:0, x:0, y: 0}}
            animate={{opacity: 1, scale:1, y: 0}}
            transition={{duration: 2}}
          >
            However, we believe travel isn't just about the destination; it's about making the journey accessible. As experienced travel advisors, we specialize in constructing cost-saving itineraries that don't compromise on the thrill of the journey. We recognize that everyone has a budget, and we are here to make sure that it doesn't limit your ability to explore. Whether you're a family wanting to embark on an unforgettable summer vacation, or a couple seeking a luxurious yet affordable getaway, we're here to guide you. Our mission at MarrsTravelers is simple but powerful: <br/><br/> <b style={{fontSize: "36px", color: "blue"}}>"Empowering families and couples to explore the world, we turn travel dreams into affordable realities, without compromising the adventure. Because priceless experiences shouldn't have a hefty price tag."</b>
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default About;