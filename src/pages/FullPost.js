import React from 'react';
import { useParams } from 'react-router-dom';
import adventuresData from '../adventuresData';
const FullPost = () => {
    const { postId } = useParams();
    console.log('postId:', postId);
    const post = adventuresData.find((data) => data.postId === postId);
    console.log('post:', post);

    if (!post) {
        return <div>Post not found.</div>;
      }
    return (
    <div>
      <h2 style={{color: 'black'}}>{post.title}</h2>
      <p>{post.description}</p>
      {/* Render the full post content */}
    </div>
  );
};

export default FullPost;