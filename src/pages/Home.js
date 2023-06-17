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
    <WaveLine />
    <img className={design.HawaiiChairs} src={beachChairs} alt='beachChairs' />
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
      <motion.img className={design.Cloud} src={cloud} alt="cloud"
        initial={{opacity: 0, x:1500, y: 300}}
        animate={{opacity: 1, x:-400, y: 300}}
        transition={{duration: 2}}
      ></motion.img>
      <motion.img className={design.Cloud} src={cloud} alt="cloud"
        initial={{opacity: 0, x:1500, y: 350}}
        animate={{opacity: 1, x:-400, y: 350}}
        transition={{duration: 2}}
      ></motion.img>
      <motion.img className={design.Cloud} src={cloud} alt="cloud"
        initial={{opacity: 0, x:1500, y: 250}}
        animate={{opacity: 1, x:-400, y: 250}}
        transition={{duration: 2}}
      ></motion.img>
      <motion.img className={design.Airplane} src={airplane} alt="airplane"
        initial={{opacity: 0, y: 300, x: 0}}
        animate={{opacity: 1, x: 1500}}
        transition={{duration: 2}}
      ></motion.img>
      </div>
    </div>
  );
}

export default Home;