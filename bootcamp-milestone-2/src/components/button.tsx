"use client";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

const Button = ({
    className,
    text,
    onClick,
}: {
    className?: string;
    text: string;
    onClick: Function;
}) => {
    return (
        <button
            className={twMerge(
                className,
                "text-base font-medium text-slate-100 bg-blue-500 hover:bg-blue-600/95 px-5 py-2 rounded-md w-fit"
            )}
            onClick={(e) => {
                onClick();
            }}>
            {text}
        </button>
    );
};

export default Button;
