"use client";
import { Six_Caps } from "next/font/google"
import { motion } from "motion/react"
import { useRef, useState } from "react";
const SixCaps = Six_Caps({
    weight:  ["400"],
    subsets: ["latin"]
})

interface Props {
    text: string;
}

export const Text = ({ text }: Props) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLHeadingElement | null>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLHeadingElement>) => {
    const container = containerRef.current;
    if (!container) return;

    const letters = container.children;    
    const containerRect = container.getBoundingClientRect()
    console.log("Container Rect:", containerRect.left);
    
    const mouseX = e.clientX - containerRect.left
    
    Array.from(letters).map((letter, index) => {
      const letterRect = letter.getBoundingClientRect();
      const letterCenterX = letterRect.left + letterRect.width / 2 - containerRect.left;
      const distance = Math.abs(mouseX - letterCenterX);
      console.log(distance);
      

      if (distance <= 10) {
        setHoveredIndex(index);
      }
    })
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  }

  return (
    <motion.h1 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
      className={`font-semibold uppercase ${SixCaps.className} items-center cursor-pointer text-[calc(1rem+16.15vh)] leading-[calc(1rem+14.15vh)]`}>
      {text.split("").map((char, index) => (
        <motion.span
          animate={{
            scaleY: 
              hoveredIndex === null 
                ? 1 
                : Math.max(1, 1.3638 - Math.abs(index - hoveredIndex) * 0.1)
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{ 
            display: "inline-block",
            transformOrigin: "bottom"
          }}
          key={index}>
            {char}
        </motion.span>
      ))}
    </motion.h1>
  )
}