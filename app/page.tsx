import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import ResearchPapers from "@/components/research-papers"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <section id="home">
          <Hero />
        </section>

        <section id="about" className="py-16">
          <About />
        </section>

        <section id="experience" className="py-16">
          <Experience />
        </section>

        <section id="skills" className="py-16">
          <Skills />
        </section>

        <section id="projects" className="py-16">
          <Projects />
        </section>

        <section id="education" className="py-16">
          <Education />
        </section>

        <section id="certifications" className="py-16">
          <Certifications />
        </section>

        <section id="research-papers" className="py-16">
          <ResearchPapers />
        </section>

        <section id="contact" className="py-16">
          <Contact />
        </section>

        <Footer />
      </div>
    </main>
  )
}

