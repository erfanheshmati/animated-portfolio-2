import { HERO_CONTENT } from "../constants"
import progilePic from "../assets/profile.png"
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: delay,
            duration: 0.5
        }
    }
})

export default function Hero() {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            className="pb-16 text-6xl text-center font-thin tracking-tight lg:mt-16 lg:text-7xl"
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                        >
                            Kevin Russell
                        </motion.h1>
                        <motion.span
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent px-1"
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                        >
                            Full Stack Developer
                        </motion.span>
                        <motion.p
                            className="my-2 max-w-xl py-6 font-light tracking-tighter lg:tracking-normal text-justify px-1"
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                        >
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img
                            src={progilePic}
                            alt=""
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
