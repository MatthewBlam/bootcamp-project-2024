import Image from "next/image";
import Content from "../components/content";
import { Poppins } from "next/font/google";
import { twMerge } from "tailwind-merge";

const poppins = Poppins({ weight: "700", subsets: ["latin"] });

export default function Home() {
    return (
        <Content>
            <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center px-10">
                <h1
                    className={twMerge(
                        poppins.className,
                        "text-[80px] leading-none mb-8"
                    )}>
                    Hi! I'm Matt.
                </h1>
                <p className="text-3xl font-base">
                    I'm a developer who loves building solutions that help
                    others.
                </p>
            </div>
        </Content>
    );
}
