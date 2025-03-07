"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Web Developer Intern",
    company: "Affinidi",
    location: "Bengaluru, India",
    period: "Oct 2021 - Dec 2021",
    description:
      "Successfully completed a mini intern at Affinidi along with leading the whole team. Developed an Issuer VC web application.",
  },
  {
    title: "AI-ML Virtual Intern",
    company: "AICTE in collaboration with AWS Academy",
    location: "Remote",
    period: "March 2022 - May 2022",
    description:
      "Successful completion of an intensive AI-ML internship at AICTE in collaboration with AWS Academy. This internship provided invaluable hands-on experience in deep learning techniques, natural language processing. Gained proficiency in Python, scikit-learn, and data visualization.",
  },
  {
    title: "Multi-cloud Intern",
    company: "Cognizant PVT LTD",
    location: "Chennai, India",
    period: "2022",
    description:
      "Trained and interned at Cognizant Pvt Ltd, gaining hands-on experience in Multi-cloud. Collaborated effectively with cross-functional teams at Cognizant Pvt Ltd to identify and solve technical challenges.",
  },
]

export default function Experience() {
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
            Work Experience
          </span>
        </h2>
        <div className="h-1 w-20 bg-purple-500 mx-auto"></div>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-purple-600/30"></div>

        {/* Experience items */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
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
                    <Briefcase className="h-6 w-6 text-purple-400 mr-2" />
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  </div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-2">{exp.company}</h4>
                  <div className="flex items-center text-gray-400 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{exp.period}</span>
                    <span className="mx-2">•</span>
                    <span>{exp.location}</span>
                  </div>
                  <p className="text-gray-300">{exp.description}</p>
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

