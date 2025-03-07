"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

const education = [
  {
    degree: "Master of Computer and Information Sciences",
    institution: "Saint Louis University",
    location: "Saint Louis, MO",
    period: "February 2023 - May 2025",
    description: "Currently pursuing Master's degree with focus on advanced computing concepts.",
  },
  {
    degree: "Bachelor of Technology in Electronics & Communication Engineering",
    institution: "Vishnu Institute of Technology",
    location: "Bhimavaram, India",
    period: "August 2019 - August 2023",
    description: "Graduated with a CGPA of 8.79/10",
  },
  {
    degree: "Intermediate Education",
    institution: "Tirumala Junior College",
    location: "Rajahmundry, India",
    period: "June 2017 - May 2019",
    description: "Completed with a CGPA of 9.88/10",
  },
]

export default function Education() {
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
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">Education</span>
        </h2>
        <div className="h-1 w-20 bg-purple-500 mx-auto"></div>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-purple-600/30"></div>

        {/* Education items */}
        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse md:text-right"
              }`}
            >
              <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div
                  className={`bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-purple-500 hover:shadow-purple-500/20 transition-shadow duration-300 h-full`}
                >
                  <div className="flex items-center mb-4">
                    <GraduationCap className="h-6 w-6 text-purple-400 mr-2" />
                    <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  </div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-2">{edu.institution}</h4>
                  <div className="flex items-center text-gray-400 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{edu.period}</span>
                    <span className="mx-2">•</span>
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{edu.location}</span>
                  </div>
                  <p className="text-gray-300">{edu.description}</p>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-purple-600 border-4 border-gray-900"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

