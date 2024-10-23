import Image from "next/image";
import Content from "../components/content";
import { Poppins } from "next/font/google";
import { Source_Code_Pro } from "next/font/google";
import { twMerge } from "tailwind-merge";

const poppins = Poppins({ weight: "700", subsets: ["latin"] });
const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

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
                <div className="flex flex-wrap items-center justify-center align-middle gap-3">
                    <p className="text-3xl font-base">I'm a</p>
                    <span
                        className={twMerge(
                            sourceCodePro.className,
                            "bg-slate-300 px-2 text-2xl font-normal mt-[3px] cursor-pointer select-none hover:scale-[105%]"
                        )}>
                        &lt;/developer&gt;
                    </span>
                    <p className="text-3xl font-base leading-[52px]">
                        who loves building solutions that help others.
                    </p>
                </div>
            </div>
        </Content>
    );
}
