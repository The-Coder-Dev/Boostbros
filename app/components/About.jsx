'use client'
import { motion } from "framer-motion"

const About = () => {
  return (
    <section className='w-full h-screen bg-primary'>
        <div className="max-w-375 mx-auto w-full h-full px-5 py-20">
          <motion.h1 initial={{y:-20, opacity:0}} animate={{y:0, opacity:100}}
           className='text-accent text-5xl max-w-2xl leading-tight font-bold'>
            We <span className='text-secondary'>break the ordinary</span>, push boundaries, and craft ideas into bold digital work.
          </motion.h1>
        </div>
    </section>
  )
}

export default About