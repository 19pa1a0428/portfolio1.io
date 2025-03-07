"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="mt-20 py-10 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <Link href="#home" className="text-2xl font-bold text-white">
              <span className="text-purple-500">R</span>ahul
            </Link>
            <p className="text-gray-400 mt-2">
              &copy; {new Date().getFullYear()} Venkata Rahul Chinta. All rights reserved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-6"
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
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mt-8"
        >
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
            className="p-3 bg-purple-600/20 rounded-full text-purple-400 hover:bg-purple-600/40 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-6 w-6" />
          </button>
        </motion.div>
      </div>
    </footer>
  )
}

