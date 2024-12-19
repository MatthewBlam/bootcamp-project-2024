"use client";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import Comment from "./comment";
import { IComment } from "@/database/blogSchema";
import CommentForm from "./comment-form";
import { useEffect, useState } from "react";

function newComment(data: any) {
    return (
        <Comment
            key={data.user + data.time}
            comment={{
                user: data.user,
                comment: data.comment,
                time: data.time,
            }}></Comment>
    );
}

const Blog = ({ className, blog }: { className?: string; blog: any }) => {
    const [components, setComponents] = useState<any[]>([]);
    const pathname = usePathname();
    async function commentHandler(name: string, message: string) {
        const data = {
            user: name,
            comment: message,
            time: new Date(),
            slug: pathname.split("/").pop(),
        };
        try {
            const response = await fetch("/api/blog-comment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            console.log("Server response:", result);
            setComponents([...components, newComment(data)]);
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    }
    useEffect(() => {
        setComponents(
            blog.comments.map((comment: IComment) => (
                <Comment
                    key={comment.user + comment.time}
                    comment={comment}></Comment>
            ))
        );
    }, []);
    if (blog) {
        return (
            <div
                className={twMerge(
                    "w-full lg:relative lg:top-1/2 lg:transform lg:-translate-y-1/2 flex flex-col gap-8 justify-center items-center",
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
                        <p className="text-base font-normal mt-4">
                            {blog.content}
                        </p>
                    </div>
                    <CommentForm commentHandler={commentHandler}></CommentForm>
                </div>
                <div className="ml-4 flex flex-wrap gap-4 items-center mb-16 lg:mb-0">
                    {components}
                </div>
            </div>
        );
    } else {
        return <div>Blog not found</div>;
    }
};

export default Blog;
