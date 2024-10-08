import { useNavigate } from 'react-router-dom';
import { FiGithub, FiLinkedin } from "react-icons/fi"; 
import './Ebook.css';
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect,useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import AhmedFathy from '../TeamIMGs/Ahmed Fathy.jpg';
import AmmarYasser from '../TeamIMGs/Ammar Yasser.jpg';
import AbdallahAhmed from '../TeamIMGs/Abdallah Ahmed.jpg';
import HabibaMahmoud from '../TeamIMGs/Habiba Mahmoud.jpg';
import RahmaFathy from '../TeamIMGs/Rahma Fathy.jpg';
import MohamedJamil from '../TeamIMGs/Mohamed Jamil.jpg';
import {
useMotionTemplate,
useMotionValue,
motion,
animate,
} from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
const testimonials = [
    {
        name: "Ahmed Fathy",
        title: "Computer Engineer",
        text: "",
        image: AhmedFathy,
        github: "https://github.com/ahmedfathy0-0", 
        linkedin: "http://www.linkedin.com/in/ahmedfathy-x1", 
    },
    {
        name: "Ammar Yasser",
        title: "Computer Engineer ",
        text: "",
        image: AmmarYasser, 
        github: "https://github.com/AMYasserF", 
        linkedin: "http://www.linkedin.com/in/ammar-yasser-89695b2a2", 
    },
    {
        name: "Abdallah Ahmed",
        title: "Computer Engineer",
        text: "",
        image: AbdallahAhmed,
        github: "https://github.com/Safan05", 
        linkedin: "https://www.linkedin.com/in/abdallah-safan-021483278/",               
    },
    {
        name: "Habiba Mahmoud",
        title: "Computer Engineer",
        text: "",
        image: HabibaMahmoud, 
        github: "https://github.com/HabibaMahmoud2005", 
        linkedin: "https://www.linkedin.com/in/habiba-mahmoud-10aa2a2a2", 
    },
    {
        name: "Rahma Fathy",
        title: "Systems and Biomedical Engineer",
        text: "",
        image: RahmaFathy,
        github: "https://github.com/Rahma-Fathy-coder", 
        linkedin: "https://www.linkedin.com/in/rahmafathy105/", 
    },
    {
        name: "Mohamed Jamil",
        title: "Aerospace engineer",
        text: "",
        image: MohamedJamil, 
        github: "https://github.com/Mohammed-gamil", 
        linkedin: "https://www.linkedin.com/in/mohammed-gamil-86421226a/", 
    },
];


const TeamPage = () => {
  const navigate = useNavigate();
  const color = useMotionValue(COLORS_TOP[0]);
  const testimonialContainerRef = useRef(null);

  useEffect(() => {
      const scrollTestimonials = () => {
          if (testimonialContainerRef.current) {
              testimonialContainerRef.current.scrollBy({
                  top: 0,
                  left: testimonialContainerRef.current.clientWidth, // Move by one full width of the grid
                  behavior: 'smooth'
              });
          }
      };

      const interval = setInterval(scrollTestimonials, 3000); // Change interval as needed

      return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);
    
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
      className="page-container"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      style={{
        backgroundImage,
      }}
    >
      <div className="relative z-10 flex flex-col items-center">
          <span className="beta-badge">
            Team
            </span>
            <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
            Meet the team behind the Orrery
            </h1>
            <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
            Our team is composed of talented developers and designers who are passionate about space exploration and technology.
            </p>
            <div className="testimonial-container" ref={testimonialContainerRef}>
            {testimonials.map((testimonial, index) => (
                <div className="testimonial-item" key={index}>
                        <img src={testimonial.image} alt={testimonial.name} />
                        <h3>{testimonial.name}</h3>
                        <p>{testimonial.title}</p>
                        <p>{testimonial.text}</p>
                        <div className="social-links">
                            <a href={testimonial.github} target="_blank" rel="noopener noreferrer" className="social-button">
                                <FiGithub />
                            </a>
                            <a href={testimonial.linkedin} target="_blank" rel="noopener noreferrer" className="social-button">
                                <FiLinkedin />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
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
                onClick={() => navigate('/explore')}
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

export default TeamPage;
