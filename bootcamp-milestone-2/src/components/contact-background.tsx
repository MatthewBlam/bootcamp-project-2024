"use client";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

import { usePathname } from "next/navigation";
import useMousePosition from "@/utils/useMousePosition";
import { useEffect, useState } from "react";

const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
};

const Pattern = ({ multiplier }: { multiplier: number }) => {
    const left = `${32 + 170 * multiplier}px`;
    return (
        <div
            className="absolute h-[calc(100%-48px-48px)] w-fit top-0 -z-10 transform rotate-180 [writing-mode:vertical-rl] flex flex-col font-black"
            style={{ left: left }}>
            <div className="select-none text-nowrap leading-none text-[120px]">
                CONTACT
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
    const amount = [];
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

It has two Wallpaper components, one that has a looping gradient animation,
another stacked on top that has a mask which is animated to follow the cursor (spotlight effect).

The Background component is only visible in the home page.


*/
const HomeBackground = () => {
    const [hidden, setHidden] = useState(false);
    const pathname = usePathname();
    const { x, y } = useMousePosition();
    useEffect(() => {
        if (pathname != "/") {
            setHidden(true);
        } else {
            setHidden(false);
        }
    }, [pathname]);
    return (
        <motion.div
            variants={variants}
            initial={hidden ? "enter" : "hidden"}
            animate={hidden ? "hidden" : "enter"}
            transition={{
                type: "linear",
                duration: hidden ? 0.3 : 1,
                delay: hidden ? 0 : 0.2,
            }}
            id="background"
            className="w-full h-full absolute top-0 left-0 -z-20 transition-none">
            <Wallpaper fade={true} x={50} y={50}></Wallpaper>
            <Wallpaper
                fade={false}
                mask={true}
                x={x ? x : 50}
                y={y ? y : 50}></Wallpaper>
        </motion.div>
    );
};

export default HomeBackground;
