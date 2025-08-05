"use client"

import { Projects } from "@/constant/Project"
import Image from "next/image"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"


const projects = () => {
  return (
    <ParallaxProvider>
      <div className="gap-y-36 grid grid-cols-1 md:grid-cols-2 px-6 md:px-10 py-44 min-h-screen">
        <div className="col-span-1">
          <Parallax speed={20}>
            <div className="flex flex-col gap-3 w-full md:w-[500px] group">
              <div className="rounded-md h-[500px] md:h-[700px] overflow-hidden">
                <Image
                  src={Projects[0].src}
                  width={500}
                  height={700}
                  className="w-full md:w-[500px] h-full object-cover hover:scale-[1.05] transition-transform duration-500 ease-in-out"
                  alt={Projects[0].title}
                />
              </div>
              <div className="flex justify-between items-center pr-2">
                <h1 className="font-medium text-lg text-white">{Projects[0].title}</h1>
                <h1 className="text-[#6d6d6d] text-base">{Projects[0].desc}</h1>
              </div>
            </div>
          </Parallax>
        </div>
        <div className="flex justify-end items-center col-span-1">
          <Parallax speed={-10}>
            <div className="flex flex-col gap-3 w-full md:w-[500px] group">
              <div className="rounded-md w-full md:w-[500px] h-[500px] overflow-hidden">
                <Image
                  src={Projects[1].src}
                  width={500}
                  height={500}
                  className="w-full md:w-[500px] h-full object-cover hover:scale-[1.05] transition-transform duration-500 ease-in-out"
                  alt={Projects[1].title}
                />
              </div>
              <div className="flex justify-between items-center pr-2">
                <h1 className="font-medium text-lg text-white">{Projects[1].title}</h1>
                <h1 className="text-[#6d6d6d] text-base">{Projects[1].desc}</h1>
              </div>
            </div>
          </Parallax>
        </div>
        <div className="flex justify-center items-center col-span-1 md:col-span-2">
          <Parallax speed={10}>
            <div className="flex flex-col gap-3 w-full md:w-[700px] group">
              <div className="rounded-md w-full md:w-[700px] h-[500px] md:h-[700px] overflow-hidden">
                <Image
                  src={Projects[2].src}
                  width={700}
                  height={700}
                  className="w-full md:w-[700px] h-full object-cover hover:scale-[1.05] transition-transform duration-500 ease-in-out"
                  alt={Projects[2].title}
                />
              </div>
              <div className="flex justify-between items-center pr-2">
                <h1 className="font-medium text-lg text-white">{Projects[2].title}</h1>
                <h1 className="text-[#6d6d6d] text-base">{Projects[2].desc}</h1>
              </div>
            </div>
          </Parallax>
        </div>
        <div className="flex justify-end items-center col-span-1">
          <Parallax speed={-10}>
            <div className="flex flex-col gap-3 w-full md:w-[500px] group">
              <div className="rounded-md w-full md:w-[500px] h-[500px] overflow-hidden">
                <Image
                  src={Projects[3].src}
                  width={500}
                  height={500}
                  className="w-full md:w-[500px] h-full object-cover hover:scale-[1.05] transition-transform duration-500 ease-in-out"
                  alt={Projects[3].title}
                />
              </div>
              <div className="flex justify-between items-center pr-2">
                <h1 className="font-medium text-lg text-white">{Projects[3].title}</h1>
                <h1 className="text-[#6d6d6d] text-base">{Projects[3].desc}</h1>
              </div>
            </div>
          </Parallax>
        </div>
        <div className="flex justify-end col-span-1">
          <Parallax speed={20}>
            <div className="flex flex-col gap-3 w-full md:w-[500px] group">
              <div className="rounded-md w-full md:h-[700px] h-[500px] overflow-hidden">
                <Image
                  src={Projects[1].src}
                  width={500}
                  height={500}
                  className="w-full md:w-[500px] h-full object-cover hover:scale-[1.05] transition-transform duration-500 ease-in-out"
                  alt={Projects[1].title}
                />
              </div>
              <div className="flex justify-between items-center pr-2">
                <h1 className="font-medium text-lg text-white">{Projects[1].title}</h1>
                <h1 className="text-[#6d6d6d] text-base">{Projects[1].desc}</h1>
              </div>
            </div>
          </Parallax>
        </div>
        <div className="flex justify-center items-center col-span-1 md:col-span-2">
          <Parallax speed={10}>
            <div className="flex flex-col gap-3 md:w-[700px] group">
              <div className="rounded-md w-full md:w-[700px] h-[500px] md:h-[700px] overflow-hidden">
                <Image
                  src={Projects[5].src}
                  width={700}
                  height={700}
                  className="w-[700px] h-full object-cover hover:scale-[1.05] transition-transform duration-500 ease-in-out"
                  alt={Projects[5].title}
                />
              </div>
              <div className="flex justify-between items-center pr-2">
                <h1 className="font-medium text-lg text-white">{Projects[5].title}</h1>
                <h1 className="text-[#6d6d6d] text-base">{Projects[5].desc}</h1>
              </div>
            </div>
          </Parallax>
        </div>
      </div>
    </ParallaxProvider>
  )
}

export default projects
