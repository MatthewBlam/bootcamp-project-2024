import Content from "@/components/content";
import { Poppins } from "next/font/google";
import { Source_Code_Pro } from "next/font/google";
import { twMerge } from "tailwind-merge";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});
const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

export default function Home() {
    return (
        <Content scroll={true}>
            <div className="absolute top-[45%] xs:top-[40%] md:top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center px-10">
                <h1
                    className={twMerge(
                        poppins.className,
                        "text-[80px] font-semibold leading-none mb-8 tracking-[0.02em]"
                    )}>
                    Hi! I'm Matt.
                </h1>
                <div className="flex flex-wrap items-center justify-center align-middle gap-3 tracking-[0.02em] [word-spacing:0.1em]">
                    <p className="text-3xl font-base">I'm a</p>
                    <span
                        className={twMerge(
                            sourceCodePro.className,
                            "bg-slate-300 px-2 text-2xl font-normal mx-1 mt-[3px] cursor-pointer select-none hover:scale-[105%]"
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
