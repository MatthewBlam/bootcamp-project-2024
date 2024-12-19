import { twMerge } from "tailwind-merge";
import Image from "next/image";

const Project = ({
    className,
    img,
    title,
    description,
    link,
}: {
    className?: string;
    img: string;
    title: string;
    description: string;
    link: string;
}) => {
    return (
        <div
            className={twMerge(
                "w-fit h-fit p-8 hover:bg-slate-200/50 rounded-xl cursor-pointer",
                className
            )}>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-6 text-left justify-center items-center w-[300px] sm:w-[400px]">
                <Image
                    src={img}
                    width={400}
                    height={400}
                    className="w-[300px] sm:w-[400px]"
                    alt={`Image for: ${title}`}
                />

                <div className="flex flex-col gap-1 justify-center items-start border-slate-300 border-l-2 pl-6">
                    <div className="text-lg font-semibold">{title}</div>
                    <div className="text-sm font-normal mb-2">
                        {description}
                    </div>
                </div>
            </a>
        </div>
    );
};

export default Project;
