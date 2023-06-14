import React /*{ useEffect, useState }*/  from 'react';
// import { useLocalData } from '../data';
import design from '../styles/Home.module.css'
import {motion} from 'framer-motion'
// import axios from 'axios';
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
      </div>
    </div>
  );
}

export default Home;