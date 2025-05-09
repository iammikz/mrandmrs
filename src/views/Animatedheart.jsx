import React,{useEffect, useState} from 'react';
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const Animatedheart = () => {
    const heartsArray = Array.from({ length: 15 });
    
  // Color palette (red, purple, lavender, pink)
  const colors = [
    '#F38BB2', '#FFB9CF', '#FFD7D7', '#F17881', '#E7525B', // Soft Hear Color Scheme
    '#A07AD5', '#C9BDF2', '#E8D9F2', '#F0AFCB', '#DE4C82' // Heavenly Valentine Color Scheme
  ];

//   const handleMouseMove = (e) => {
//     setMousePos({
//       x: e.clientX,
//       y: e.clientY,
//     });
//   };
  
    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                pointerEvents: "none",
                zIndex: -1000,
                overflow: "hidden",
                display: "flex",
                alignItems: "flex-end",
            }}

            // onMouseMove={handleMouseMove}
        >
            {heartsArray.map((_, index) => (
                <motion.div
                key={index}
                initial={{ y: "90%", opacity: 0 }}
                animate={{
                    y: "-600%", 
                    x: ["-50%", "50%", "-50%"], // Adds sway effect in x-axis
                    rotate: [0, 15, -15, 10, -10, 5, -5, 0], // tilt effect
                    filter: [ // Glow effect
                        "drop-shadow(0 0 5px rgba(230, 0, 35, 0.3))",
                        "drop-shadow(0 0 20px rgba(230, 0, 35, 0.8))",
                        "drop-shadow(0 0 5px rgba(230, 0, 35, 0.3))"
                    ],
                    opacity: 1 
                }}
                transition={{
                    duration: Math.random() * 8 + 4, // Longer duration
                    delay: Math.random() * 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    position: "absolute",
                    left: `${Math.random() * 100}%`,
                    bottom: `${Math.random() * 100}%`,
                    fontSize: `${Math.random() * 24 + 16}px`,
                    // color: `hsl(${Math.random() * 360}, 70%, 60%)`, // Random Color (all)
                    color: colors[Math.floor(Math.random() * colors.length)], // Random color from the palette
                    
                }}
                >
                    {/* <motion.div
                        animate={{
                            rotate: [0, 15, -15, 10, -10, 5, -5, 0], // Tilt effect
                        }}
                        transition={{
                            duration: 10, // Slow and smooth tilt effect
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    > */}
                        <FaHeart />
                    {/* </motion.div> */}
                </motion.div>
          ))}
        </div>
    );
}

export default Animatedheart