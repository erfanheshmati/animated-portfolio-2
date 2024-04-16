import { CONTACT } from "../constants"
import { motion } from "framer-motion"

export default function Contact() {
    return (
        <div className='border-b border-neutral-900 pb-20'>
            <motion.h1
                className='my-10 text-center text-4xl'
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1 }}
            >
                Get in touch
            </motion.h1>
            <div className='text-center tracking-tighter'>
                <motion.p
                    className='my-4'
                    whileInView={{ x: 0, opacity: 1 }}
                    initial={{ x: -100, opacity: 0 }}
                    transition={{ duration: 1.5 }}
                >
                    {CONTACT.address}
                </motion.p>
                <motion.p
                    className="my-4"
                    whileInView={{ x: 0, opacity: 1 }}
                    initial={{ x: 100, opacity: 0 }}
                    transition={{ duration: 1.5 }}
                >
                    {CONTACT.phoneNo}
                </motion.p>
                <motion.a
                    href="#"
                    className="border-b"
                    whileInView={{ y: 0, opacity: 1 }}
                    initial={{ x: 0, opacity: 0 }}
                    transition={{ duration: 1.5, delay: 1.5 }}
                >
                    {CONTACT.email}
                </motion.a>
            </div>
        </div>
    )
}
