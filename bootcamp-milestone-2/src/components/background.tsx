"use client";
import { Lexend_Exa } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const lexendExa = Lexend_Exa({ weight: "600", subsets: ["latin"] });

const Pattern = ({ multiplier }: { multiplier: number }) => {
    const bottom = `${32 + 170 * multiplier}px`;
    return (
        <div
            className="absolute -z-10 w-full h-fit left-12 flex"
            style={{ bottom: bottom }}>
            <div
                className={twMerge(
                    "text-[160px] select-none text-nowrap text-slate-200/50 leading-none",
                    lexendExa.className
                )}>
                Matthew Blam
            </div>
        </div>
    );
};

const Background = () => {
    let amount = [];
    for (let i = 0; i < 21; i++) {
        amount.push(i);
    }
    return (
        <div id="background">
            {amount.map((multiplier) => {
                return (
                    <Pattern multiplier={multiplier} key={multiplier}></Pattern>
                );
            })}
            <motion.div
                animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 10,
                    times: [0, 0.5, 1],
                }}
                className="absolute bg-gradient-to-r to-transparent via-slate-100 from-transparent bg-size-200 bg-pos-0 w-full h-full -z-10"></motion.div>
            <motion.div
                animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 8,
                    delay: 2,
                    times: [0, 0.5, 1],
                }}
                className="absolute bg-gradient-to-b to-transparent via-slate-100/40 from-transparent bg-size-200 bg-pos-0 w-full h-full -z-10"></motion.div>
        </div>
    );
};

export default Background;
