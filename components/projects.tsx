"use client"

import { motion } from "framer-motion"
import { Github, Code } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Virtual Marker with Python and OpenCV",
    description:
      "A virtual marker which detects the movement of the hand through the webcam and access the marker tool.",
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3",
    tags: ["Python", "OpenCV", "Computer Vision"],
    github: "#",
    demo: "#",
  },
  {
    title: "Home Automation using NodeMCU 8266",
    description:
      "Worked on automating home appliances using NodeMCU and relay module resulting in cost-efficient automation (used Micro Python for coding NodeMCU).",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    tags: ["Python", "Micro Python", "IoT", "NodeMCU"],
    github: "#",
    demo: "#",
  },
  {
    title: "Ultrasonic Pest Repellent",
    description: "As a part of Smart India Hackathon 2022, developed this project and led the team.",
    image:
      "https://images.unsplash.com/photo-1581092921461-7031e4bfb83e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    tags: ["Hardware", "Electronics", "Embedded Systems"],
    github: "#",
    demo: "#",
  },
]

export default function Projects() {
  return (
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
            My Projects
          </span>
        </h2>
        <div className="h-1 w-20 bg-purple-500 mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-purple-500/20 group"
          >
            <div className="relative overflow-hidden h-48">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex space-x-3">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-purple-600 text-purple-400 hover:bg-purple-600/10"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <Button
          size="lg"
          variant="outline"
          className="border-purple-600 text-purple-400 hover:bg-purple-600/10"
          asChild
        >
          <a href="https://github.com/19pa1a0428" target="_blank" rel="noopener noreferrer">
            <Code className="mr-2 h-5 w-5" />
            View More Projects on GitHub
          </a>
        </Button>
      </motion.div>
    </div>
  )
}

