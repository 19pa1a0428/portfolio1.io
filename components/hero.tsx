"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col justify-center pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-purple-400"
            >
              Hello, I&apos;m
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-5xl md:text-6xl font-bold mt-2 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text"
            >
              Venkata Rahul Chinta
            </motion.h1>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-2xl md:text-3xl text-gray-300 mt-4"
            >
              Master&apos;s Student in Computer & Information Sciences
            </motion.h3>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-lg text-gray-300 max-w-xl"
          >
            A smart working person, quite enthusiastic in learning new skills. Looking forward to work in a competitive
            environment that would help me improve myself as well as aid the organization.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white"
              onClick={() => {
                document.querySelector("#contact")?.scrollIntoView({
                  behavior: "smooth",
                })
              }}
            >
              Contact Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-600 text-purple-400 hover:bg-purple-600/10"
              asChild
            >
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  // Create a blob from the resume text
                  const resumeText = `VenkataRahulChinta
venkatarahul17@gmail.com|+1(314)-575-0755|SaintLouis,MO
Linkedin |GitHub |Portfolio
EDUCATION
SAINT LOUIS UNIVERSITYMay 2025
Master of Computer and Information SciencesSaint Louis, MO
VISHNU INSTITUE OF TECHNOLOGYMay 2023
Bachelors in Electronics and Communication EngineeringBhimavaram, India
EXPERIENCE
AFFINIDI| Web Developer InternBengaluru, India
SuccessfullycompletedaminiinternatAffinidialongwithleadingthewholeteam.Anddevelopeda
IssuerVCwebapplication
COGNIZANT PVT LTD| Multi-cloud InternChennai, India
TrainedandinternedatCognizantPvtLtd,gaininghands-onexperienceinMulti-cloud.Collaborated
effectivelywithcross-functionalteamsatCognizantPvtLtdtoidentifyandsolvetechnicalchallenges.
SKILLS
Programming LanguagesPython, Java
Libraries/FrameworksJavaScript, React, Shell Scripting (Bash, PowerShell), Numpy, Pandas
Tools / PlatformsGit, VS Code, AWS, Ansible, SaltStack, Jenkins, GitLab CI/CD, Docker, Ku-
bernetes
DatabasesSQL, MongoDB
PROJECTS / OPEN-SOURCE
HOME AUTOMATION USING NODEMCU 8266(WITH MICRO PYTHON)Python, Embedded C
WorkedinthisprojectonautomatingthehomeappliancesinwhichweusedthenodeMCUandrelay
moduleresultingincostefficientautomation
CERTIFICATIONS
•AWSCloudFoundation-Coursera.
•UniversityofMichigan,PythonforEverybodySpecialization-Coursera.
•UniversityofWashingtonBusiness,EnglishCommunicationSkillsSpecialization-Coursera.
•BasicNetflixCloneBootcampincollaborationwithGDC,Ranchi-IITRanchi.
HONORS & AWARDS
•SIH(SmartIndiaHackathon)-2022Finalist`
                  const blob = new Blob([resumeText], { type: "text/plain" })
                  const url = URL.createObjectURL(blob)
                  const a = document.createElement("a")
                  a.href = url
                  a.download = "Venkata_Rahul_Chinta_Resume.txt"
                  document.body.appendChild(a)
                  a.click()
                  document.body.removeChild(a)
                  URL.revokeObjectURL(url)
                }}
              >
                <FileText className="mr-2 h-5 w-5" />
                Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex gap-4 mt-6"
          >
            <Link
              href="https://github.com/19pa1a0428"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/venkata-rahul-chinta/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link href="mailto:venkatarahul17@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="h-6 w-6" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative w-full h-80 md:h-96 lg:h-[500px] rounded-full overflow-hidden border-4 border-purple-500/30">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0882.jpg-kwaFHOiLE5fCx9ryqRFeA2Rm6hUjRj.jpeg"
              alt="Venkata Rahul Chinta"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg animate-pulse">
            <span className="text-center">Let&apos;s Connect!</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="flex justify-center mt-16"
      >
        <button
          onClick={() => {
            document.querySelector("#about")?.scrollIntoView({
              behavior: "smooth",
            })
          }}
          className="text-gray-400 hover:text-white transition-colors animate-bounce"
        >
          <ArrowDown className="h-8 w-8" />
        </button>
      </motion.div>
    </div>
  )
}

