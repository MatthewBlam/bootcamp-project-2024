"use client";
import React from "react";
import { motion } from "framer-motion";

const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
};

const MotionWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            className="w-full h-full transition-none"
            variants={variants}
            initial="hidden"
            animate="enter"
            transition={{ type: "linear", duration: 2, delay: 0.2 }}>
            {children}
        </motion.div>
    );
};

export default MotionWrapper;
