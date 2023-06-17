import React from 'react';
import design from '../styles/About.module.css';
import PageHeader from '../components/PageHeader';
import profilePic from '../imgs/MarrsTravelersProfile.jpg'
import {motion} from 'framer-motion'
const About = () => {
  return (
    <div className={design.About} id="about">
      <PageHeader title={"Who We Are"} />
      <div className={design.Container}>
        <div className={design.Text}>
          <motion.img className={design.ProfilePic} src={profilePic} alt="Marrs Travelers - Liz & Ian"
            initial={{opacity: 0, scale:0, x:0, y: 0}}
            animate={{opacity: 1, scale:1, y: 0}}
            transition={{duration: 2}}
          >
          </motion.img>
          <motion.p className={design.TextOne}
            initial={{opacity: 0, scale:0, x:0, y: 0}}
            animate={{opacity: 1, rotate: 360, scale:1, y: 0}}
            transition={{duration: 2}}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Molestiae, minima in? Itaque libero accusantium repellendus molestiae, 
            nam inventore non adipisci explicabo ipsum dolorem laborum earum. 
            Quaerat tempore inventore sequi fugiat eaque facere, 
            placeat ex maiores dolores iste magnam corporis delectus praesentium aliquam pariatur numquam, 
            quam dolore cupiditate totam amet libero harum dolor distinctio reiciendis? Quas, dolore, 
            sequi consectetur optio quia dolor ducimus exercitationem odit, 
            veniam culpa eius facilis assumenda aperiam nisi neque ratione velit. 
            Consequatur vitae, laborum dicta eius dolorem praesentium! Obcaecati ad iste molestiae sit maiores, 
            molestias eligendi assumenda veniam et veritatis esse perspiciatis, blanditiis doloribus nisi ullam animi.
          </motion.p>
          <motion.p className={design.TextTwo}
            initial={{opacity: 0, scale:0, x:0, y: 0}}
            animate={{opacity: 1, rotate: 360, scale:1, y: 0}}
            transition={{duration: 2}}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Molestiae, minima in? Itaque libero accusantium repellendus molestiae, 
            nam inventore non adipisci explicabo ipsum dolorem laborum earum. 
            Quaerat tempore inventore sequi fugiat eaque facere, 
            placeat ex maiores dolores iste magnam corporis delectus praesentium aliquam pariatur numquam, 
            quam dolore cupiditate totam amet libero harum dolor distinctio reiciendis? Quas, dolore, 
            sequi consectetur optio quia dolor ducimus exercitationem odit, 
            veniam culpa eius facilis assumenda aperiam nisi neque ratione velit. 
            Consequatur vitae, laborum dicta eius dolorem praesentium! Obcaecati ad iste molestiae sit maiores, 
            molestias eligendi assumenda veniam et veritatis esse perspiciatis, blanditiis doloribus nisi ullam animi.
          </motion.p>
          <motion.p className={design.TextThree}
            initial={{opacity: 0, scale:0, x:0, y: 0}}
            animate={{opacity: 1, rotate: 360, scale:1, y: 0}}
            transition={{duration: 2}}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Molestiae, minima in? Itaque libero accusantium repellendus molestiae, 
            nam inventore non adipisci explicabo ipsum dolorem laborum earum. 
            Quaerat tempore inventore sequi fugiat eaque facere, 
            placeat ex maiores dolores iste magnam corporis delectus praesentium aliquam pariatur numquam, 
            quam dolore cupiditate totam amet libero harum dolor distinctio reiciendis? Quas, dolore, 
            sequi consectetur optio quia dolor ducimus exercitationem odit, 
            veniam culpa eius facilis assumenda aperiam nisi neque ratione velit. 
            Consequatur vitae, laborum dicta eius dolorem praesentium! Obcaecati ad iste molestiae sit maiores, 
            molestias eligendi assumenda veniam et veritatis esse perspiciatis, blanditiis doloribus nisi ullam animi.
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default About;