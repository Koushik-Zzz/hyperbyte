"use client"
import Image from "next/image"
import { Text } from "./text"
import { useRouter } from "next/navigation";

interface Props {
  text: string
  description: string[]
  connectBtn?: boolean
}

const Home = ({ text, description, connectBtn }: Props) => {
  const router = useRouter()
  const handleScrollBottom = () => {
    router.push("/contact")
  }

  return (
    <div className="flex items-center justify-center h-screen w-screen text-center gap-4 flex-col relative">
      <Text text={text} />
      <div className="flex flex-col gap-2 justify-center items-center text-center text-neutral-500 uppercase">
        {description.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      {connectBtn && (
        <div onClick={handleScrollBottom} className="py-2 px-3 bg-white rounded-md flex items-center gap-2 mt-4 transition-all duration-500 cursor-pointer ease-in-out group">
          <div className="relative">
            <Image
              src="/icons/add.svg"
              alt="profile"
              width={18}
              height={18}
              className="top-1/2 left-1/2 z-0 absolute transition-all -translate-x-1/2 -translate-y-1/2 group-hover:translate-x-[5px] duration-500 ease-in-out"
            />
            <div className="top-1/2 left-1/2 absolute flex justify-center items-center bg-gray-400 rounded-full transition-all -translate-x-1/2 -translate-y-1/2 group-hover:translate-x-[30px] duration-500 ease-in-out size-[32px]">
              <h1 className="text-[10px] text-white">You</h1>
            </div>
            <Image
              src={"/images/person.avif"}
              height={32}
              width={32}
              alt="Person"
              className="group-hover:mr-10 relative z-10 border-[2px] border-black rounded-full transition-all duration-500 ease-in-out"
            />
          </div>
          <h1 className="group-hover:ml-8 font-medium text-black text-sm transition-all duration-500 ease-in-out">
            Book a 15-min call
          </h1>
        </div>
      )}
      {connectBtn && (
        <div className="flex justify-center items-center gap-2">
          <div className="flex justify-center items-center bg-green-500 rounded-full size-3">
            <div className="bg-green-500 rounded-full size-3 animate-ping" />
          </div>
          <h1 className="font-normal text-sm text-white">Let&apos;s Build!</h1>
        </div>
      )}
      <div className="bottom-10 absolute flex flex-col justify-center items-center px-10">
        <div className="size-7 relative animate-down before:content-[''] before:absolute before:top-[15px] before:left-[18px] before:size-[18px] before:border-l-2 before:border-b-2 before:border-white before:transform before:rotate-[-45deg]" />
      </div>
      <div className="flex absolute bottom-16 flex-col justify-center items-center">
        <h1 className="text-white translate-x-[12px]">Scroll For More</h1>
      </div>
    </div>
  )
}

export default Home
