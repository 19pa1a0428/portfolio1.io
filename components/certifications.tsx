"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const certifications = [
  {
    title: "AWS Academy Graduate - AWS Academy Cloud Architecting",
    issuer: "AWS Academy",
    description:
      "Completed AWS Academy Graduate (AWS Academy Cloud Architecting) as a part of AWS Virtual Cloud internship in association with AICTE",
    link: "https://drive.google.com/file/d/18Qwd2iEVC-72cpayTv6vR49DEjuCnGfK/view?usp=sharing",
  },
  {
    title: "Python for Everybody Specialization",
    issuer: "University of Michigan - Coursera",
    description: "Specialization course from Coursera",
    link: "https://drive.google.com/file/d/1jDBFCJeSyWnrETqJL65gzlwsgZl1dqq2/view?usp=sharing",
  },
  {
    title: "Business English Communication Skills Specialization",
    issuer: "University of Washington - Coursera",
    description: "A Five course specialization by University of Washington",
    link: "https://drive.google.com/file/d/1Ls6ee1xk1RW2ZOtqFpT4c-PyaxmIG0P0/view?usp=sharing",
  },
  {
    title: "Basic Netflix Clone Bootcamp",
    issuer: "ShapeAI in Collaboration with GDG Ranchi",
    description: "Successfully completed the 7-days long Bootcamp on 'Basic Netflix Clone' using HTML, CSS, JavaScript",
    link: "https://drive.google.com/file/d/13JQ1efoffpBPi2UZltSvKmJPstRKLZkT/view?usp=sharing",
  },
]

const awards = [
  "SIH (Smart India Hackathon) - 2022 Finalist",
  "Winner in NVIDIA - AI Quiz Contest Competition conducted by Futurenet Technologies",
  "Code Gladiators 2022 semi finalist and secured a rank of 4793",
  "Received a certificate at CodeKaze - India's Biggest Coding Competition conducted by Coding ninjas and secured an all India rank of 1292",
  "Bagged several prizes in various events of National Tech Fest Valiant – 2k19 conducted by Vishnu Institute of Technology",
]

const papers = [
  {
    title: "Innovative Tech Tools in B.Tech Classrooms",
    venue: "Vellore Institute of Technology (VIT)",
    description:
      "Presented a paper on Innovative tech tools in B.Tech classrooms and Participated in One Day National Seminar on ILCC held at Vellore Institute of Technology (VIT)",
    link: "https://drive.google.com/file/d/1s6HIljCzej_pb3x8cnXhvs8_nv6DtWE9/view?usp=sharing",
  },
  {
    title: "AI Based Courses for the Development of Language Proficiency in Higher Education",
    venue: "ELT@I-2021",
    description: "Presented a paper at 15th International & 51st Annual Conference of ELT@I-2021",
    link: "https://drive.google.com/file/d/1w2VAK2Fg40jNbh6tV3VUMoyUL77-gUbZ/view?usp=sharing",
  },
  {
    title: "Home Automation using Node MCU and Blynk App",
    venue: "Saveetha School of Engineering, Chennai, Tamil Nadu",
    description: "Presented a paper in ICACCMS'22 held at Saveetha School of Engineering, Chennai, Tamil Nadu",
    link: "https://drive.google.com/file/d/1w2VAK2Fg40jNbh6tV3VUMoyUL77-gUbZ/view?usp=sharing",
  },
]

export default function Certifications() {
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
            Certifications & Awards
          </span>
        </h2>
        <div className="h-1 w-20 bg-purple-500 mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-purple-600/20 rounded-lg text-purple-400 mr-3">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                <p className="text-purple-400">{cert.issuer}</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">{cert.description}</p>
            <Button
              size="sm"
              variant="outline"
              className="border-purple-600 text-purple-400 hover:bg-purple-600/10"
              asChild
            >
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Certificate
              </a>
            </Button>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12 mt-20"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
            Research Paper Presentations
          </span>
        </h2>
        <div className="h-1 w-20 bg-purple-500 mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {papers.map((paper, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-purple-600/20 rounded-lg text-purple-400 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{paper.title}</h3>
                <p className="text-purple-400">{paper.venue}</p>
              </div>
            </div>
            <p className="text-gray-300 mt-4 mb-4">{paper.description}</p>
            <Button
              size="sm"
              variant="outline"
              className="border-purple-600 text-purple-400 hover:bg-purple-600/10"
              asChild
            >
              <a href={paper.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Certificate
              </a>
            </Button>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-lg p-8 border border-purple-500/20"
      >
        <h3 className="text-2xl font-bold text-center mb-8 text-white">Honors & Awards</h3>
        <ul className="space-y-4">
          {awards.map((award, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="flex items-start"
            >
              <Award className="h-6 w-6 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">{award}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}

