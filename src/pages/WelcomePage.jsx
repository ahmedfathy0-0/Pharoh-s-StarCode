import { useNavigate } from 'react-router-dom';
import './Ebook.css';
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];


const WelcomePage = () => {
  const navigate = useNavigate();
  const color = useMotionValue(COLORS_TOP[0]);
 

    useEffect(() => {
        animate(color, COLORS_TOP, {
        ease: "easeInOut",
        duration: 10,
        repeat: Infinity,
        repeatType: "mirror",
        });
    }, []);
    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
    const border = useMotionTemplate`1px solid ${color}`;
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;


  return (
    // <motion.div 
    //   className="page-container"
    //   initial={{ opacity: 0 }} 
    //   animate={{ opacity: 1 }} 
    //   exit={{ opacity: 0 }}
    // >
    //   <h1>Welcome to the Interactive Orrery!</h1>
    //   <p>
    //     Our solar system is a vast and dynamic place, home to the Sun, eight planets, 
    //     and countless other celestial bodies. From the fiery surface of Mercury to the icy rings 
    //     of Saturn, each planet offers unique characteristics and wonders.
    //   </p>
    //   <Button variant="primary" onClick={() => navigate('/team')}>Next</Button>
    // </motion.div>
    <motion.section
        style={{
        backgroundImage,
        }}
        className="page-container"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
    >
      <div className="relative z-10 flex flex-col items-center">
      <span className="beta-badge">
        Lets go to NASA!
      </span>
      <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
        Welcome to the Interactive Orrery!
      </h1>
      <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
        Our solar system is a vast and dynamic place, home to the Sun, eight planets, 
        and countless other celestial bodies. From the fiery surface of Mercury to the icy rings 
        of Saturn, each planet offers unique characteristics and wonders.
      </p>
     
      <motion.button
        style={{
          border,
          boxShadow,
        }}
        whileHover={{
          scale: 1.015,
        }}
        whileTap={{
          scale: 0.985,
        }}
        className="next-button"
        onClick={() => navigate('/team')}
      >
        Next
        <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
      </motion.button>
    </div>

    <div className="absolute inset-0 z-0">
      <Canvas>
        <Stars radius={50} count={2500} factor={4} fade speed={2} />
      </Canvas>
    </div>
  </motion.section>
  );
};

export default WelcomePage;
