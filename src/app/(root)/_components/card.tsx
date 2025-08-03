"use client"

import { motion, MotionValue, useTransform } from "motion/react"
import { Project } from "@/constant/Project"
import { SixCaps } from "@/constant/font"

interface props {
  project: Project
  progress: MotionValue<number>
  range: number[]
  targetScale: number
}

const Card = ({ project, progress, range, targetScale }: props) => {

    const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div className="top-0 sticky flex justify-center items-center p-4 md:p-10 w-screen h-screen">
      <motion.div
        style={{
          backgroundImage: `url(${project.src})`,
          scale,
        }}
        className="relative bg-cover bg-no-repeat bg-center rounded-[20px] w-full h-[400px] md:h-full"
      >
        <div className="bottom-10 left-0 absolute flex max-md:flex-col justify-between md:items-end gap-4 px-10 w-full">
          <div className="bg-[#ffffff35] backdrop-blur-sm px-3 py-1 rounded-md w-fit text-white">
            {project.year}
          </div>
          <h1
            className={`${SixCaps.className} text-white text-[calc(1rem+8.15vw)] leading-[calc(1rem+6.15vw)]`}
          >
            {project.title}
          </h1>
          <div className="bg-[#ffffff35] backdrop-blur-sm px-3 py-1 rounded-md w-fit text-white">
            {project.desc}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Card
