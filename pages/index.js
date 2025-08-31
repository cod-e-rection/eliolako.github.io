import Head from 'next/head'
import { motion } from 'framer-motion'
import Particles from 'react-tsparticles'

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <Head>
        <title>Elio Lako | Portfolio</title>
        <meta name="description" content="Portfolio website of Elio Lako" />
      </Head>
      <Particles options={{ background: { color: "#111" }, particles: { number: { value: 50 } } }} />
      <main className="z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold"
        >
          Hi, I'm Elio Lako
        </motion.h1>
        <p className="mt-4 text-lg text-gray-400">Frontend Developer | Placeholder Info</p>
        <section className="mt-16 space-y-16">
          <div>
            <h2 className="text-3xl font-semibold">About Me</h2>
            <p className="mt-2 text-gray-400">This is a placeholder about section.</p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold">Skills</h2>
            <p className="mt-2 text-gray-400">React, Next.js, Tailwind, Placeholder</p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              <div className="bg-gray-800 p-4 rounded-lg">Placeholder Project 1</div>
              <div className="bg-gray-800 p-4 rounded-lg">Placeholder Project 2</div>
              <div className="bg-gray-800 p-4 rounded-lg">Placeholder Project 3</div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-semibold">Contact</h2>
            <p className="mt-2 text-gray-400">placeholder@email.com</p>
          </div>
        </section>
      </main>
    </div>
  )
}