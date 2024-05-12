import logo from "../assets/logo.png"
import { FaLinkedin, FaGithub, FaInstagram, FaLink } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"

export default function Navbar() {
    return (
        <nav className="mb-5 2xl:mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href="#" className="hover:opacity-70">
                    <img className="mx-2 w-20" src={logo} alt="" />
                </a>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="#" className="hover:opacity-70"><FaLinkedin /></a>
                <a href="#" className="hover:opacity-70"><FaGithub /></a>
                <a href="#" className="hover:opacity-70"><FaInstagram /></a>
                <a href="#" className="hover:opacity-70"><FaSquareXTwitter /></a>
            </div>
        </nav>
    )
}
