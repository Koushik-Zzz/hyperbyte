import Home from "@/components/Home"
import React from "react"
import Projects from "./_components/projects"
import Contact from "@/components/Contact"

const ProjectPage = () => {
  return (
    <div>
      <Home
        text="Project"
        description={[
          "Explore our platform and discover",
          "how we empower innovation in education.",
        ]}
        connectBtn={true}
      />
      <Projects />
      <Contact 
        text="Contact"
        link="/contact"
        description="Contact us and let's bring your vision to life."
      />
    </div>
  )
}

export default ProjectPage
