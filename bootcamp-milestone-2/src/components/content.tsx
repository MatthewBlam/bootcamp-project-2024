"use client";
import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
};

const Content = ({
    children,
    scroll,
}: {
    children: React.ReactNode;
    scroll: boolean;
}) => {
    return (
        <motion.main
            className={twMerge(
                !scroll ? "overflow-hidden" : "overflow-y-scroll",
                "px-14 py-6 relative transition-none w-full h-[calc(100%-120px)]"
            )}
            variants={variants}
            initial="hidden"
            animate="enter"
            transition={{ type: "linear", duration: 1, delay: 0.3 }}>
            {children}
        </motion.main>
    );
};

export default Content;
