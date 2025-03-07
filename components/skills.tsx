"use client"

import { motion } from "framer-motion"
import { Code, Database, Server, Cpu } from "lucide-react"
import { getSkillIcon } from "./skill-icons"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code className="h-6 w-6" />,
    skills: ["Python", "Java"],
  },
  {
    title: "Libraries/Frameworks",
    icon: <Server className="h-6 w-6" />,
    skills: ["JavaScript", "React", "Shell Scripting (Bash, PowerShell)", "Numpy", "Pandas"],
  },
  {
    title: "Tools / Platforms",
    icon: <Cpu className="h-6 w-6" />,
    skills: ["Git", "VS Code", "AWS", "Ansible", "SaltStack", "Jenkins", "GitLab CI/CD", "Docker", "Kubernetes"],
  },
  {
    title: "Databases",
    icon: <Database className="h-6 w-6" />,
    skills: ["SQL", "MongoDB"],
  },
]

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

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
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">My Skills</span>
        </h2>
        <div className="h-1 w-20 bg-purple-500 mx-auto"></div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-purple-500/10"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-purple-600/20 rounded-lg text-purple-400 mr-3">{category.icon}</div>
              <h3 className="text-xl font-bold text-white">{category.title}</h3>
            </div>
            <ul className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="flex items-center">
                  {getSkillIcon(skill)}
                  <span className="text-gray-300 ml-2">{skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-lg p-8 border border-purple-500/20"
      >
        <h3 className="text-2xl font-bold text-center mb-8 text-white">Skill Proficiency</h3>
        <div className="space-y-6">
          {[
            { name: "Python", percentage: 90 },
            { name: "Java", percentage: 80 },
            { name: "JavaScript & React", percentage: 75 },
            { name: "Cloud Technologies", percentage: 85 },
            { name: "Database Management", percentage: 70 },
          ].map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-300">{skill.name}</span>
                <span className="text-purple-400">{skill.percentage}%</span>
              </div>
              <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 1, delay: 0.2 * index }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

