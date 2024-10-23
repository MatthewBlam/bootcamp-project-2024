"use client";
import { Lexend_Exa } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

import useMousePosition from "../utils/useMousePosition";

const lexendExa = Lexend_Exa({ weight: "600", subsets: ["latin"] });

const Pattern = ({ multiplier }: { multiplier: number }) => {
    const bottom = `${32 + 170 * multiplier}px`;
    return (
        <div
            className="horizontal flex justify-center absolute -z-10 w-[calc(100%-48px-48px)] h-fit left-12"
            style={{ bottom: bottom }}>
            <div
                className={twMerge(
                    "select-none text-nowrap leading-none",
                    lexendExa.className
                )}>
                Matthew Blam
            </div>
        </div>
    );
};

const Wallpaper = ({
    mask,
    x,
    y,
    fade,
}: {
    mask?: boolean;
    x: number;
    y: number;
    fade: boolean;
}) => {
    let amount = [];
    for (let i = 0; i < 21; i++) {
        amount.push(i);
    }

    const size = 500;

    return (
        <motion.div
            animate={{
                WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            }}
            transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
            className={twMerge(
                fade ? "text-slate-200/65" : "text-slate-300/50",
                "w-full h-full absolute",
                mask ? "mask" : ""
            )}>
            {amount.map((multiplier) => {
                return (
                    <Pattern multiplier={multiplier} key={multiplier}></Pattern>
                );
            })}
            {fade && (
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
            )}
            {fade && (
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
                    className="absolute bg-gradient-to-b to-transparent via-slate-100 from-transparent bg-size-200 bg-pos-0 w-full h-full -z-10"></motion.div>
            )}
        </motion.div>
    );
};

/*

The way the Background component is built may be confusing.
It has two Wallpaper components

*/
const Background = () => {
    const { x, y } = useMousePosition();
    return (
        <div
            id="background"
            className="w-full h-full absolute top-0 left-0 -z-20">
            <Wallpaper fade={true} x={50} y={50}></Wallpaper>
            <Wallpaper
                fade={false}
                mask={true}
                x={x ? x : 50}
                y={y ? y : 50}></Wallpaper>
        </div>
    );
};

export default Background;
