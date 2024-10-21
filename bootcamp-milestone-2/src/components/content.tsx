"use client";
import React from "react";
import { motion } from "framer-motion";

const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
};

const Content = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.main
            className="px-14 py-14 relative transition-none w-full h-[calc(100%-112px)] overflow-y-scroll"
            variants={variants}
            initial="hidden"
            animate="enter"
            transition={{ type: "linear", duration: 1, delay: 0.2 }}>
            {children}
        </motion.main>
    );
};

export default Content;
