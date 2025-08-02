import Home from "@/components/Home"
import Navbar from "@/components/layout/Navbar"
import Video from "./_components/Video"

export default function HomePage() {
  return (
    <div className="">
      <Navbar />
      <Home
        text="hyperbyte"
        description={[
          "We create products that serves both users",
          "and businesses and drive real results.",
        ]}
      />
      <Video />
    </div>
  )
}
