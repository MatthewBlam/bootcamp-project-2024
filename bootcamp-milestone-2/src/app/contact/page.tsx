"use client";
import { useRef, LegacyRef } from "react";
import { useMeasure } from "react-use";
import Content from "@/components/content";
import Form from "@/components/form";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function Contact() {
    const [container, { width }] = useMeasure();

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        container: ref,
    });
    const spring = useSpring(scrollYProgress, { stiffness: 300, damping: 10 });
    const left = useTransform(spring, [0, 1], [40, width - 100]);

    return (
        <Content scroll={false}>
            <motion.div
                className={
                    "pointer-events-none hidden overflow-visible text-slate-200 [@media(min-width:1000px)]:block select-none -z-20 absolute top-1/2 left-10 transform -translate-y-[55%] rotate-180 text-[120px] [writing-mode:vertical-rl] font-black"
                }
                style={{ left: left }}>
                CONTACT
            </motion.div>

            <div
                ref={container as LegacyRef<HTMLDivElement>}
                className="overflow-scroll w-full h-full flex justify-center items-start pt-6 -z-40 pointer-events-none">
                <Form className="z-0"></Form>
            </div>
            <div
                ref={ref}
                className="no-scrollbar overflow-y-scroll w-full h-full absolute top-0 left-0 bg-transparent -z-30">
                <div className="w-full h-[400%] bg-transparent -z-30"></div>
            </div>
        </Content>
    );
}
