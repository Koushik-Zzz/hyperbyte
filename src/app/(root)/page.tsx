import Home from "@/components/Home"
import Navbar from "@/components/layout/Navbar"
import Video from "./_components/Video"
import Work from "./_components/Work"
import Testimonial from "./_components/Testimonial"
import Contact from "@/components/Contact"
import Services from "./_components/Services"

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
        connectBtn={true}
      />
      <Video />
      <Work />
      <Services />
      <Testimonial />
      <Contact
        text="contact"
        link="/contact"
        description="Contact us and let's bring your vision to life."
      />
    </div>
  )
}
