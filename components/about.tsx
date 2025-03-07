"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

export default function About() {
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
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">About Me</span>
        </h2>
        <div className="h-1 w-20 bg-purple-500 mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden border-4 border-purple-500/30 shadow-xl shadow-purple-500/10">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0882.jpg-kwaFHOiLE5fCx9ryqRFeA2Rm6hUjRj.jpeg"
              alt="Venkata Rahul Chinta"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg rotate-6 shadow-lg">
            <span className="text-center">Passionate DevOps Developer</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold text-purple-400">
            Master&apos;s Student in Computer & Information Sciences
          </h3>
          <p className="text-gray-300 text-lg">
            As a recent Master&apos;s graduate with a strong passion for technology and innovation, I am eager to
            contribute to a competitive and forward-thinking organization as a DevOps Engineer. My academic background,
            coupled with hands-on experience in cloud computing, automation, and CI/CD pipelines, has equipped me with
            the technical expertise to streamline development processes and enhance operational efficiency.
          </p>
          <p className="text-gray-300 text-lg">
            I thrive in collaborative environments where I can leverage my problem-solving skills and enthusiasm for
            learning to drive continuous improvement. My goal is to not only grow professionally but also to deliver
            impactful solutions that align with organizational objectives. With a solid foundation in tools like Docker,
            Kubernetes, Jenkins, and AWS, I am excited to bring my energy and dedication to a team that values
            innovation and excellence.
          </p>
          <p className="text-gray-300 text-lg">Let&apos;s build, deploy, and scale together!</p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white"
              onClick={() => {
                document.querySelector("#experience")?.scrollIntoView({
                  behavior: "smooth",
                })
              }}
            >
              My Experience
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
                Download CV
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

