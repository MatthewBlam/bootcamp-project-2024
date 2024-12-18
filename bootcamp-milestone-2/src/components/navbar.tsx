"use client";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { SiGithub } from "react-icons/si";

const Navlink = ({
    text,
    link,
    pathname,
}: {
    text: string;
    link: string;
    pathname: string;
}) => {
    const margin = text == "contact" ? "-mr-[0.22px]" : "mr-[0.2px]";
    return (
        <Link
            href={link}
            className="cursor-pointer hover:scale-[106%] flex gap-[1.5px] justify-center items-center">
            <p
                className={twMerge(
                    margin,
                    pathname.slice(0, 6) == link.slice(0, 6)
                        ? "flex items-center align-middle"
                        : "opacity-0 select-none flex items-center"
                )}>
                &lt;
            </p>
            {text}
            <p
                className={
                    pathname.slice(0, 6) == link.slice(0, 6)
                        ? "flex items-center align-middle"
                        : "opacity-0 select-none flex items-center"
                }>
                &gt;
            </p>
        </Link>
    );
};

const Navbar = () => {
    const pathname = usePathname();
    return (
        <header
            id="navbar"
            className="h-[120px] bg-gradient-to-b from-slate-100 to-transparent from-80% to-95% overflow-scroll select-none flex gap-10 justify-around md:justify-between items-center px-12 pt-9 pb-12">
            <Link
                href="/"
                className="cursor-pointer font-semibold text-[24px] hover:scale-[113%] hidden md:block">
                mb
            </Link>
            <nav className="flex gap-4 sm:gap-8 lg:gap-12 font-semibold text-base">
                <Navlink text="home" link="/" pathname={pathname}></Navlink>
                <Navlink
                    text="projects"
                    link="/projects"
                    pathname={pathname}></Navlink>
                <Navlink
                    text="blogs"
                    link="/blogs"
                    pathname={pathname}></Navlink>
                <Navlink
                    text="contact"
                    link="/contact"
                    pathname={pathname}></Navlink>
            </nav>
            <a
                href="https://github.com/MatthewBlam"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:scale-[113%] hidden md:block">
                <SiGithub className="size-[26px]"></SiGithub>
            </a>
        </header>
    );
};

export default Navbar;
