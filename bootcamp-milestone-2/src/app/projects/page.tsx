"use client";
import Content from "@/components/content";
import Project from "@/components/project";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Portfolio() {
    const ref = useRef() as MutableRefObject<HTMLDivElement>;
    const [padding, setPadding] = useState("");
    useEffect(() => {
        function handleResize() {
            if (ref.current["offsetHeight"] > 600) {
                setPadding("");
            } else {
                setPadding("pt-5");
            }
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Content scroll={true}>
            <div
                ref={ref}
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
