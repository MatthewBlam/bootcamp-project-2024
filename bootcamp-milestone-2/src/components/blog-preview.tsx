"use client";
import React, { useState } from "react";
import Image from "next/image";

const BlogPreview = ({
    className,
    title,
    description,
    image,
    imageAlt,
    slug,
}: {
    className?: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
}) => {
    return (
        <a
            href={slug}
            className="w-fit h-fit p-8 hover:bg-slate-200/50 rounded-xl">
            <div className="flex flex-col justify-center items-center gap-4">
                <h3 className="text-lg font-semibold"> {title} </h3>

                <Image src={image} alt={imageAlt} width={200} height={200} />
                <p>{description}</p>
            </div>
        </a>
    );
};

export default BlogPreview;
