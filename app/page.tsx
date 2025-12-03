"use client"

import Image from "next/image";
import prem from '../public/prem.jpg';
import {ThemeToggle} from '../components/ui/theme-toggle';
import {motion} from 'framer-motion'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CardContent } from "@/components/ui/card";
import weatherapp from '../public/weatherapp.jpg';
import explore from '../public/explore.jpg';
import evolution from '../public/evolution.jpg';
import resume from "@/assets/resume.pdf";
import { Card } from "@/components/ui/card";
export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-color-duration-300">
      <div className="mx-auto max-w-xl px-4 py-20">
        <motion.header initial={{opacity: 0, x: -100}} animate={{opacity: 1, x: 0}} transition={{duration: 0.8}} className="flex justify-between items-center mb-12">  
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <Image src={prem} alt="profile" className="cursor-pointer transition-all duration-300 hover:scale-110"></Image>
          </div>
          <ThemeToggle />
        </motion.header>

        <main className="space-y-10">
          <section className="space-y-10">
            <motion.div
          initial={{opacity: 0, x: 100}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.8}}
          className="space-y-1"
          >
              <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-700 bg-clip-text text-transparent inline-block">Prem Kumar</h1>
              <p className="text-gray-600 dark:text-gray-400">Frontend Developer</p>
              <p className="text-gray-600 dark:text-gray-400">Eluru, India</p>
            
          </motion.div>
          <motion.div 
          initial={{opacity: 0, x: -100}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.8}}
          className="space-y-3">
              <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
                I am a detail-oriented and highly motivated Frontend Developer with a strong passion for creating clean, responsive, and user-friendly interfaces. I have experience in 
                {""} <span className="text-black dark:text-white">HTML</span>, {""} <span className="text-black dark:text-white">CSS</span>, {""} <span className="text-black dark:text-white">JavaScript</span>, {""} <span className="text-black dark:text-white">React</span>, and version control using {""} <span className="text-black dark:text-white">Git</span> and {""} <span className="text-black dark:text-white">GitHub</span>. I enjoy learning modern frontend technologies and continuously improving my skills to build better digital experiences. proper title give me
              </p>
          </motion.div>

          <motion.div 
          initial={{opacity: 0, x: 50}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.8}}
          className="flex items-center gap-3">
           <a href="/resume.pdf" download="resume.pdf">
  <Button className="rounded-full bg-gradient-to-r from-rose-400 to-indigo-600 text-white transition-transform hover:scale-105">
    Resume
  </Button>
</a>

            <Link href="https://github.com/Premkaanolla08" className="text-gray-600 dark:text-gary-400 hover:text-black dark:hover:text-white transition-colors">
              <FaGithub className="w-6 h-6"/>
            </Link>
            <Link href="https://www.linkedin.com/in/prem-kumar-kaanolla-73b28532a" className="text-gray-600 dark:text-gary-400 hover:text-black dark:hover:text-white transition-colors">
              <FaLinkedin className="w-6 h-6"/>
            </Link>
             <Link href="#" className="text-gray-600 dark:text-gary-400 hover:text-black dark:hover:text-white transition-colors">
              <FaInstagram className="w-6 h-6"/>
            </Link>
          </motion.div>
          </section>
          
          <motion.section
          initial={{opacity: 0, y: 100}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
          className="space-y-8">
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">Experience</h2>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">August, 2025</p>
                  <p className="font-medium">Web Developer</p>
                  <p className="text-blue-600 dark:text-blue-400">OTP Technologies</p>
                </div>
                </div>  
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Worked as an intern on an EPUB publication project, using HTML, CSS, and JavaScript to structure, format, and enhance digital book content. Contributed to creating clean layouts, improving readability, and ensuring compatibility across various e-reading platforms.</p>

              </div>
           </motion.section>
           <motion.section
          initial={{opacity: 0, y: 100}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
          className="space-y-8">
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">Education</h2>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-gray-600 dark:text-gray-400 text-sm">August, 2020 - May, 2024</p>
                  <p className="font-medium">Information Technology</p>
                  <p className="text-blue-600 dark:text-blue-400">Sir C.R. Reddy College of Engineering</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
          I developed a deep passion for frontend development during my college years, where I enjoyed creating visually appealing, responsive, and user-centered web interfaces.</p>

            </div>
           </motion.section>
           <motion.section
          initial={{opacity: 0, y: 100}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
          className="space-y-8">
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Link href="https://premkaanolla08.github.io/WeatherApp-Project/" target="_blank">
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image src={weatherapp} alt="project 1" className="rounded-lg mb-4"/>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Weather App</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">HTML, CSS, JS</p>
                    </div>
                    <Button variant="ghost" size="icon">→</Button>
                  </div>
                </CardContent>
              </Card>
              </Link>
              <Link href="https://www.figma.com/proto/6xCHX90mGPGF5GbePLhsPG/Untitled?page-id=0%3A1&node-id=1-2&t=TCU2llNcciyzCuCv-1" target="_blank">
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image src={explore} alt="project 2" className="rounded-lg mb-4"/>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Explore Ease</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Figma</p>
                    </div>
                    <Button variant="ghost" size="icon">→</Button>
                  </div>
                </CardContent>
              </Card>
              </Link>
              <Link href="https://premkaanolla08.github.io/react-ev-olution/" target="_blank">
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image src={evolution} alt="project 3" className="rounded-lg mb-4"/>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Ev-Olution</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">React</p>
                    </div>
                    <Button variant="ghost" size="icon">→</Button>
                  </div>
                </CardContent>
              </Card>
              </Link>
              </div>
              <p className="text-gray-500">© 2025 Prem</p>
           </motion.section>
        </main>
    </div>

 
    </div>
  );
}
