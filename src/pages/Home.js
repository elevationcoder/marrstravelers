import React /*{ useEffect, useState }*/  from 'react';
import { useLocalData } from '../data';
import design from '../styles/Home.module.css'
// import axios from 'axios';
function Home() {
  const { data } = useLocalData();
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
        <h1 className={design.Welcome}>MarrsTravelers</h1>
        <p>Welcome!</p>
      </div>
      {/* {posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))} */}
      {/* {entries.map((entries) => (
        <div key={entries.id}>
          <h2>{entries.title}</h2>
          <p>{entries.content}</p>
        </div>
      ))} */}
    </div>
  );
}

export default Home;