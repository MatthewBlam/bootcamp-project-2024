import Link from "next/link";
import { SiGithub } from "react-icons/si";

const Navbar = () => {
    return (
        <header className="flex gap-10 justify-around sm:justify-between items-center px-8 py-6">
            <Link
                href="/"
                className="font-semibold text-2xl hover:scale-110 hidden sm:block">
                mb
            </Link>
            <nav className="flex gap-8 font-semibold text-base">
                <Link href="/" className={"hover:scale-105"}>
                    Home
                </Link>
                <Link href="/portfolio" className="hover:scale-105">
                    Portfolio
                </Link>
                <Link href="/resume" className="hover:scale-105">
                    Resume
                </Link>
                <Link href="/blogs" className="hover:scale-105">
                    Blogs
                </Link>
                <Link href="/contact" className="hover:scale-105">
                    Contact
                </Link>
            </nav>
            <a
                href="https://github.com/MatthewBlam"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 hidden sm:block">
                <SiGithub className="size-6"></SiGithub>
            </a>
        </header>
    );
};

export default Navbar;
