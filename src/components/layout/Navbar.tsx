"use client"
import { useState } from "react"
import Link from "next/link"
import { NAV_ROUTES } from "@/constant/nav"
import { SixCaps } from "@/constant/font"
import { AnimatePresence } from "motion/react"
import Image from "next/image"
import { motion } from "motion/react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      {
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { delay: 0.8 } }}
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{
                overflow: "hidden",
              }}
              className="h-screen w-screen fixed left-0 top-0 gap-4 bg-black z-50 flex flex-col items-center justify-center"
            >
              {NAV_ROUTES.map((route, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                  key={index}
                >
                  <Link
                    className={`${SixCaps.className} text-white text-[6rem] leading-[5rem] md:text-[8rem] md:leading-[7rem]`}
                    href={route.path}
                  >
                    {route.title}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      }
      <nav className="top-0 left-0 z-[51] fixed flex justify-between items-center p-6 md:p-10 w-full">
        <Image src="/icons/logo-white.png" alt="Logo" height={40} width={40} />
        <div className="flex items-center gap-4">
          <h1 className="text-white text-base">Menu</h1>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-[50px] height-[50px] cursor-pointer flex flex-col gap-y-1 items-center justify-center z-10"
          >
            <span
              className={`block w-5 h-0.5 bg-white transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-white transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-1.8 " : ""
              }`}
            />
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar
