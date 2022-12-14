// React Libraries
import React from "react";
import { motion } from "framer-motion";
// Local Files
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
// Styling
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Abhishek</h1>
            </div>
          </div>
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.6 }}
            className='tag-cmp app__flex'
          >
            <p className='p-text'>Full Stack Developer</p>
            {/* <p className='p-text'>IOS/ANDROID DEVELOPER</p>
            <p className='p-text'>Blockchain Developer </p> */}
          </motion.div>

          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.8 }}
            className='tag-cmp app__flex'
          >
            <p className='p-text'>IOS/ANDROID DEVELOPER</p>
          </motion.div>

          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.9 }}
            className='tag-cmp app__flex'
          >
            <p className='p-text'>Blockchain Developer</p>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ delayChildren: 0.5, duration: 0.5 }}
        className='app__header-img'
      >
        <img src={images.aj} alt='profile.bg' />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt='profile_circle'
          className='overlay_circle'
        />
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {[images.flutter, images.react, images.sass].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle=${index}`}>
            <img src={circle} alt='circle' />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
