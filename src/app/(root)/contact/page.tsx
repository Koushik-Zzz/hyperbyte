import Home from "@/components/Home"
import MessageForm from "./_components/MessageForm"
import Contact from "@/components/Contact"

const page = () => {
  return (
    <div>
        <Home 
            text="Contact"
            description={[
                "Reach out to us and share your vision.",
                "Together, we'll turn your ideas into reality."
            ]}
            connectBtn={false}
        />
        <MessageForm />
        <Contact
            text="projects"
            link="/project"
            description="Explore the impact of our innovative solutions."
        />
    </div>
  )
}

export default page