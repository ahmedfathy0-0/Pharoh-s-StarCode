import { useNavigate } from 'react-router-dom';
import {Spinner} from 'react-bootstrap';
import './Ebook.css';
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect,useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const ExplorePage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const color = useMotionValue(COLORS_TOP[0]);

  const handleLaunch = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.location.href = '/solar';  
    }, 2000);
  };
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
         Ready to Explore?
      </h1>
      <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
         Embark on a journey through our solar system. Discover fascinating movements of planets and Near-Earth Objects.
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
        onClick={handleLaunch} disabled={loading}
      >
        {loading ? <Spinner animation="border" size="sm" /> : 'Launch Orrery'}
      </motion.button>
    </div>

    <div className="absolute inset-0 z-0">
      <Canvas>
        <Stars radius={50} count={2500} factor={4} fade speed={2} />
      </Canvas>
    </div>
  </motion.section>
    //   <h1>Ready to Explore?</h1>
    //   <p>Embark on a journey through our solar system. Discover fascinating movements of planets and Near-Earth Objects.</p>
    //   <Button variant="primary" onClick={handleLaunch} disabled={loading}>
    //     {loading ? <Spinner animation="border" size="sm" /> : 'Launch Orrery'}
    //   </Button>
    // </motion.div>
  );
};

export default ExplorePage;
