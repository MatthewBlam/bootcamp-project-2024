"use client";
import Content from "@/components/content";
import Project from "@/components/project";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";

export default function Portfolio() {
    const pathname = usePathname();
    const [padding, setPadding] = useState("");
    useEffect(() => {
        function handleResize() {
            const container = document.getElementById("projects");
            if (container)
                if (container.offsetHeight > 500) {
                    setPadding("");
                } else {
                    setPadding("pt-5");
                }
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [pathname]);

    return (
        <Content scroll={true}>
            <div
                id="projects"
                className={twMerge(
                    padding,
                    "flex justify-center items-center flex-wrap"
                )}>
                <Project
                    img="/images/dexcom_app.png"
                    title="Dexcom Desktop Application"
                    description="View and monitor G6 / G7 blood glucose readings on the computer "
                    link="https://github.com/MatthewBlam/Dexcom-Desktop-Application"></Project>
                <Project
                    img="/images/codengraver.png"
                    title="codengraver"
                    description="Create beautiful images of your code with syntax highlighting and customizability"
                    link="https://github.com/MatthewBlam/codengraver"></Project>
                <Project
                    img="/images/lotion.png"
                    title="Lotion"
                    description="Organize your life in a customizable fashion to meet productivity needs and goals"
                    link="https://github.com/MatthewBlam/lotion"></Project>
            </div>
        </Content>
    );
}
