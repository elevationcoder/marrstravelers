import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import {motion} from 'framer-motion'
import design from '../styles/Contact.module.css';

const instagramLink = "https://www.instagram.com/marrstravelers";
const twitterLink = "https://twitter.com/marrstravelers";
const facebookLink = "https://www.facebook.com/profile.php?id=100093015876531";
const handleUrl = (url) => {
    return () => window.open(url, "_blank")
}
const Contact = () => {
    return(
        <div className={design.Contact}>
            <div className={design.ContactIcons}>
                <motion.div
                    style={{paddingRight: '10px'}}
                    whileHover={{scale: 1.3, y: -5}}
                >
                    <FaInstagram size="30px" style={{padding: '1%'}} 
                        onClick={handleUrl(instagramLink)}
                    />
                </motion.div>
                <motion.div
                    style={{paddingRight: '10px'}}
                    whileHover={{scale: 1.3, y: -5}}
                >
                    <FaTwitter color="white" size="30px" style={{padding: "1%"}} 
                        onClick={handleUrl(twitterLink)}
                    />
                </motion.div>
                <motion.div
                    style={{paddingRight: '10px'}}
                    whileHover={{scale: 1.3, y: -5}}
                >
                    <FaFacebook color="white" size="30px" style={{padding: "1%"}} 
                        onClick={handleUrl(facebookLink)}
                    />
                </motion.div>
            </div>
        </div>
    );
}

export default Contact;