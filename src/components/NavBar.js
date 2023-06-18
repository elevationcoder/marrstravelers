import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import design from '../styles/NavBar.module.css';
function NavBar(){
    return (
        <div className={design.NavBar}>
          <nav>
            <ul>              
              <motion.li
                whileHover={{scale: 1.2}}
              >
                <Link to="/">Home</Link>
              </motion.li>            
            
              <motion.li
                whileHover={{scale: 1.2}}
              >
                <Link to="/about">About</Link>
              </motion.li>           
              
              <motion.li
                whileHover={{scale: 1.2}}
              >
                <Link to="/adventures">Adventures</Link>
              </motion.li>

              <motion.li
                whileHover={{scale: 1.2}}
              >
                <Link to="/tips">Tips</Link>
              </motion.li>

              <motion.li
                whileHover={{scale: 1.2}}
              >
                <Link to="/affiliates">Affiliates</Link>
              </motion.li>

              <motion.li
                whileHover={{scale: 1.2}}
              >
                <Link to="/contact">Contact</Link>
              </motion.li>              
            </ul>
          </nav>
        </div>
    );    
}

export default NavBar;