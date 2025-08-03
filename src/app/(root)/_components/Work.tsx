"use client"
import { Projects } from "@/constant/Project"
import { motion, useInView, useScroll } from "motion/react"
import { useRef } from "react"
import Card from "./card"
import Link from "next/link"

const Work = () => {
  const mainContainerRef = useRef<HTMLDivElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const isInView = useInView(containerRef, { once: true })

  const { scrollYProgress } = useScroll({
    target: mainContainerRef,
    offset: ["start start", "end start"],
  })

  const letters = Array.from("Projects")
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const variants = {
    hidden: {
      opacity: 0,
      x: 0,
      y: 100,
      rotateZ: 45,
      transition: {
        type: "spring" as const,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotateZ: 0,
      transition: {
        type: "spring" as const,
      },
    },
  }

  return (
    <>
      <div ref={mainContainerRef} className="relative min-h-[200vh]">
        <div ref={containerRef} className="top-[500px] absolute w-[400px]" />
        <div className="top-0 left-0 sticky w-screen h-screen">
          <div className="relative flex flex-col justify-center items-center mx-auto h-screen">
            <motion.div
              variants={container}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className={`px-2 absolute uppercase overflow-hidden font-bold tracking-tighter flex text-[calc(15vw)] md:text-[calc(13vw)] lg:text-[calc(11vw)]`}
            >
              {letters.map((char, index) => (
                <motion.span
                  className="text-white"
                  variants={variants}
                  key={index}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>
            <motion.div
              className={`px-2 absolute uppercase overflow-hidden font-bold tracking-tighter flex text-[calc(15vw)] md:text-[calc(13vw)] lg:text-[calc(11vw)]`}
            >
              {letters.map((char, index) => (
                <motion.span
                  style={{
                    WebkitTextStroke: "1px #fdfdfd",
                  }}
                  key={index}
                  className="text-transparent"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
        {Projects.slice(0, 3).map((project, index) => {
          const targetScale = 1 - (Projects.slice(0, 3).length - index) * 0.1
          return (
            <Card
              key={index}
              project={project}
              progress={scrollYProgress}
              range={[index * 0.25, 1]}
              targetScale={targetScale}
            />
          )
        })}
      </div>
      <div className="flex flex-col justify-center items-center gap-4 py-4 text-[#6d6d6d] text-center text-xl md:text-2xl">
        <p className="uppercase">
          Elevating Digital Experiences with Cutting-Edge Innovation
        </p>
        <Link
          href={"/project"}
          className="border-white px-4 py-2 border rounded-[20px] text-base text-white"
        >
          See All Works
        </Link>
      </div>
    </>
  )
}

export default Work
