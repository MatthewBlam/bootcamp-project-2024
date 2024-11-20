"use client";
import Content from "@/components/content";
import BlogPreview from "@/components/blog-preview";
import blogs, { Blog } from "@/static/blogData";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Blogs() {
    const ref = useRef() as MutableRefObject<HTMLDivElement>;
    const [padding, setPadding] = useState("");
    useEffect(() => {
        function handleResize() {
            if (ref.current["offsetHeight"] > 600) {
                setPadding("");
            } else {
                setPadding("pt-14");
            }
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <Content scroll={true}>
            <div
                ref={ref}
                className={twMerge(
                    padding,
                    "flex justify-center items-center gap-8 flex-wrap"
                )}>
                {blogs.map((blog: Blog) => (
                    <BlogPreview
                        key={blog.title + blog.slug}
                        title={blog.title}
                        description={blog.description}
                        image={blog.image}
                        imageAlt={blog.imageAlt}
                        slug={blog.slug}></BlogPreview>
                ))}
            </div>
        </Content>
    );
}
