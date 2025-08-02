"use client"
import { motion, progress, useScroll, useTransform } from "motion/react"
import { useRef } from "react"

const Video = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const stickyRef = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const ClipProgress = useTransform(scrollYProgress, [0, 0.5], [20, 80])

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      <div
        ref={stickyRef}
        className="sticky top-0 m-0 p-0 w-screen h-screen overflow-hidden"
      >
        <div className="relative z-auto inset-0 p-0 h-full w-full">
          <motion.div className="w-full h-full"
          style={{
            clipPath: useTransform(
                ClipProgress,
                (progress: number) => `circle(${progress}% at 50% 50%)`
            ),
          }}>
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="/videos/pressmaster.mp4"
              autoPlay
              loop
              muted
            />
          </motion.div>
        </div>
        <div
          className="bottom-0 z-[10] absolute w-full h-[370px] translate-y-[5px]"
          style={{
            maskImage: "linear-gradient(transparent, black 85%)",
            backgroundColor: "rgb(12, 12, 12)",
          }}
        ></div>
      </div>
    </div>
  )
}

export default Video
