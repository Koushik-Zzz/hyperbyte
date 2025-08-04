"use client"
import { SixCaps } from "@/constant/font";
import { ServicesData } from "@/constant/services";
import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import ServiceCard from "./ServiceCard";

const Services = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    })
    const scale = useTransform(scrollYProgress, [0, 0.7], [0.7, 1]);
    const width = useTransform(scrollYProgress, [0, 0.7], [70, 100]);
    const borderRadius = useTransform(scrollYProgress, [0, 0.7], [40, 1]);
    
    return (
    <div ref={containerRef} className="relative min-h-[200vh]">
        <div className="top-0 left-0 sticky w-full h-screen overflow-hidden">
            <motion.div 
            style={{ scale, borderRadius: `${borderRadius}px` }}
            className="z-[1] absolute inset-0 bg-white"
            >
                <div className="z-[2] absolute inset-0 grid grid-cols-1 md:grid-cols-2 w-full h-full">
                    <div className={`${SixCaps.className} text-[6rem] leading-[5rem] md:text-[calc(1rem+10.15vw)] md:leading-[calc(1rem+8.15vw)] text-black px-3 max-md:pt-10 md:p-10 flex gap-4 flex-col justify-center`}>
                        <h1>Our</h1>
                        <h1>Services</h1>
                    </div>
                    <div className="flex flex-col justify-center gap-4 px-3 md:pr-20">
                        {ServicesData.map((service, index) => (
                            <ServiceCard key={index} service={service} width={width} />
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>

    </div>
  )
}

export default Services