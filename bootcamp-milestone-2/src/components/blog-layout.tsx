"use client";
import BlogPreview from "@/components/blog-preview";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
// import { Blog } from "@/database/blogSchema";

const BlogLayout = ({ blogs }: { blogs: any }) => {
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
        <div
            ref={ref}
            className={twMerge(
                padding,
                "flex justify-center items-center gap-8 flex-wrap"
            )}>
            {blogs
                ? blogs.map((blog: any) => (
                      <BlogPreview
                          key={blog.title + blog.slug}
                          title={blog.title}
                          description={blog.description}
                          image={blog.image}
                          imageAlt={blog.imageAlt}
                          slug={blog.slug}></BlogPreview>
                  ))
                : ""}
        </div>
    );
};

export default BlogLayout;
