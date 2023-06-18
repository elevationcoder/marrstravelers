// import { useLocalData } from '../data';
// import axios from 'axios';
import React /*{ useEffect, useState }*/  from 'react';
import design from '../styles/Home.module.css'
import {motion} from 'framer-motion'
import WaveLine from '../components/WaveLine';
import cloud from '../imgs/Cloud.svg'
import beachChairs from '../imgs/2013HawaiiTwoChairs.jpg'
import airplane from '../imgs/airplane.svg'
function Home() {
  // const { data } = useLocalData();
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   axios.get('http://localhost:3001/api/posts')
  //     .then((response) => {
  //       setPosts(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching posts:', error);
  //     });
  // }, []);
  return (
    <div className={design.Home}>
    <img className={design.HawaiiChairs} src={beachChairs} alt='beachChairs' />
    <div className={design.WaveLine}>
      <WaveLine />
    </div>
      <div className={design.Container}>
      <motion.h1 
        className={design.TitleHeader} 
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        MarrsTravelers
      </motion.h1>
      <motion.p 
        className={design.TitleHeader} 
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome!
      </motion.p>
      <div className={design.MissionContainer}>
        <motion.h2
          className={design.Mission} 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: .2 }}
        >
          Empowering families and couples to explore the world, we turn travel dreams into affordable realities, without compromising the adventure. Because priceless experiences shouldn't have a hefty price tag.
        </motion.h2>
      </div>
      <motion.img className={design.Cloud} src={cloud} alt="cloud"
        initial={{opacity: 0, x:1500, y: -50}}
        animate={{opacity: 1, x:-400, y: -50}}
        transition={{duration: 3}}
      ></motion.img>
      <motion.img className={design.Cloud} src={cloud} alt="cloud"
        initial={{opacity: 0, x:1500, y: -100}}
        animate={{opacity: 1, x:-400, y: -100}}
        transition={{duration: 3}}
      ></motion.img>
      <motion.img className={design.Cloud} src={cloud} alt="cloud"
        initial={{opacity: 0, x:1500, y: -200}}
        animate={{opacity: 1, x:-400, y: -200}}
        transition={{duration: 3}}
      ></motion.img>
      <motion.img className={design.Airplane} src={airplane} alt="airplane"
        initial={{opacity: 0, y: -80, x: 0}}
        animate={{opacity: 1, x: 1200}}
        transition={{duration: 3}}
      ></motion.img>
      </div>
    </div>
  );
}

export default Home;