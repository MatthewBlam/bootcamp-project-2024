"use client";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import Comment from "./comment";
import { IComment } from "@/database/blogSchema";

const Blog = ({ className, blog }: { className?: string; blog: any }) => {
    if (blog) {
        return (
            <div
                className={twMerge(
                    "w-full h-full flex flex-col gap-8 justify-center items-center",
                    className
                )}>
                {" "}
                <div className="flex flex-wrap lg:flex-nowrap lg:-mt-12 gap-8 justify-center items-center">
                    <Image
                        src={blog.image}
                        className="rounded-xl"
                        width={300}
                        height={430}
                        alt={blog.imageAlt}
                    />
                    <div>
                        <h1 className="text-xl font-semibold">{blog.title}</h1>
                        <h3 className="text-base font-medium">
                            {new Date(blog.date).toLocaleDateString()}
                        </h3>
                        <p className="text-base font-normal mt-4 mb-16 lg:mb-0">
                            {blog.content}
                        </p>
                    </div>
                </div>
                <div className="ml-4 flex flex-wrap gap-4">
                    {blog.comments.map((comment: IComment) => (
                        <Comment
                            key={comment.user + comment.time}
                            comment={comment}></Comment>
                    ))}
                </div>
            </div>
        );
    } else {
        return <div>Blog not found</div>;
    }
};

export default Blog;
