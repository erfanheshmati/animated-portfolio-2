import { RiReactjsLine } from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { SiMongodb } from "react-icons/si"
import { DiRedis } from "react-icons/di"
import { FaNodeJs } from "react-icons/fa"
import { BiLogoPostgresql } from "react-icons/bi"
import { motion } from "framer-motion"

const iconVariants = (duration) => ({
    hidden: {
        y: -10
    },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

export default function Technologies() {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h1
                className='my-20 text-center text-4xl'
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1 }}
            >
                Technologies
            </motion.h1>
            <motion.div
                className='flex flex-wrap items-center justify-center gap-4'
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 1.5 }}
            >
                <motion.div
                    className='rounded-2xl border-4 border-neutral-800 p-4'
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                >
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div
                    className='rounded-2xl border-4 border-neutral-800 p-4'
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                >
                    <TbBrandNextjs className="text-7xl" />
                </motion.div>
                <motion.div
                    className='rounded-2xl border-4 border-neutral-800 p-4'
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                >
                    <SiMongodb className="text-7xl text-green-500" />
                </motion.div>
                <motion.div
                    className='rounded-2xl border-4 border-neutral-800 p-4'
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                >
                    <DiRedis className="text-7xl text-red-700" />
                </motion.div>
                <motion.div
                    className='rounded-2xl border-4 border-neutral-800 p-4'
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                >
                    <FaNodeJs className="text-7xl text-green-500" />
                </motion.div>
                <motion.div
                    className='rounded-2xl border-4 border-neutral-800 p-4'
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                >
                    <BiLogoPostgresql className="text-7xl text-sky-700" />
                </motion.div>
            </motion.div>
        </div>
    )
}
