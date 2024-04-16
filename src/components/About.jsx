import aboutimg from "../assets/about.jpg"
import { ABOUT_TEXT } from "../constants"
import { motion } from "framer-motion"

export default function About() {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h1
                className='my-20 text-center text-4xl'
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1 }}
            >
                About <span className='text-neutral-500'>Me</span>
            </motion.h1>
            <div className='flex flex-wrap'>
                <motion.div
                    className='w-full lg:w-1/2 lg:p-8'
                    whileInView={{ x: 0, opacity: 1 }}
                    initial={{ x: -100, opacity: 0 }}
                    transition={{ duration: 1.5 }}
                >
                    <div className='flex items-center justify-center'>
                        <img className="rounded-2xl" src={aboutimg} alt="" />
                    </div>
                </motion.div>
                <motion.div
                    className="w-full lg:w-1/2"
                    whileInView={{ x: 0, opacity: 1 }}
                    initial={{ x: 100, opacity: 0 }}
                    transition={{ duration: 1.5 }}
                >
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6">
                            {ABOUT_TEXT}
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
