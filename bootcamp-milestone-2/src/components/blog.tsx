import { twMerge } from "tailwind-merge";
import Image from "next/image";

const Blog = ({
    className,
    title,
    date,
    image,
    imageAlt,
    content,
}: {
    className?: string;
    title: string;
    date: string;
    image: string;
    imageAlt: string;
    content: string;
}) => {
    return (
        <div
            className={twMerge(
                "w-full h-full flex flex-wrap lg:flex-nowrap lg:-mt-12 gap-8 justify-center items-center",
                className
            )}>
            <Image
                src={image}
                className="rounded-xl"
                width={300}
                height={430}
                alt={imageAlt}
            />
            <div>
                <h1 className="text-xl font-semibold">{title}</h1>
                <h3 className="text-base font-medium">{date}</h3>
                <p className="text-base font-normal mt-4 mb-16 lg:mb-0">
                    {content}
                </p>
            </div>
        </div>
    );
};

export default Blog;
