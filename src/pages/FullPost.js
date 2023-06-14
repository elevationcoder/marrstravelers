import React from 'react';
import { useParams } from 'react-router-dom';
import adventuresData from '../adventuresData';
import design from '../styles/FullPost.module.css';
import PageHeader from '../components/PageHeader';

const FullPost = () => {
    const { postId } = useParams();
    const post = adventuresData.find((data) => data.postId === postId);

    if (!post) {
        return <div>Post not found.</div>;
    }

    return (
        <div className={design.FullPost}>
            <PageHeader title={post.title} className={design.Title} />
            <div className={design.PostContent}>
                {post.image.map((image, index) => (
                    <div key={index} className={design[`ImageContainer${index + 1}`]}>
                        <img src={image} alt={post.altName} className={design.ShrinkImage} />
                    </div>
                ))}
                {post.texts.map((text, index) => (
                    <p key={index} className={design[`Text${index + 1}`]}>
                        {text}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default FullPost;
