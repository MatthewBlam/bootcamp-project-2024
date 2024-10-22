import Link from "next/link";
import { SiGithub } from "react-icons/si";

const Navbar = () => {
    return (
        <header
            id="navbar"
            className="h-24 bg-gradient-to-b from-slate-100 to-transparent from-80% to-95% overflow-scroll select-none flex gap-10 justify-around sm:justify-between items-center px-12 pt-10 pb-6">
            <Link
                href="/"
                className="cursor-pointer font-semibold text-2xl hover:scale-[113%] hidden sm:block">
                mb
            </Link>
            <nav className="flex gap-8 md:gap-12 font-semibold text-base">
                <Link href="/" className="cursor-pointer hover:scale-105">
                    Home
                </Link>
                <Link
                    href="/portfolio"
                    className="cursor-pointer hover:scale-105">
                    Portfolio
                </Link>
                <Link href="/resume" className="cursor-pointer hover:scale-105">
                    Resume
                </Link>
                <Link href="/blogs" className="cursor-pointer hover:scale-105">
                    Blogs
                </Link>
                <Link
                    href="/contact"
                    className="cursor-pointer hover:scale-105">
                    Contact
                </Link>
            </nav>
            <a
                href="https://github.com/MatthewBlam"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:scale-[113%] hidden sm:block">
                <SiGithub className="size-[26px]"></SiGithub>
            </a>
        </header>
    );
};

export default Navbar;
