"use client";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import Textarea from "./textarea";
import Input from "./input";
import Button from "./button";

const Form = ({ className }: { className?: string }) => {
    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [messageValue, setMessageValue] = useState("");
    function submit() {
        setNameValue("");
        setEmailValue("");
        setMessageValue("");
    }
    return (
        <div
            className={twMerge(
                "pointer-events-none max-w-[500px] px-4 w-full flex flex-col justify-center items-center gap-8",
                className
            )}>
            <Input
                className="z-10 pointer-events-auto"
                label="Name"
                placeholder="Name"
                value={nameValue}
                setValue={setNameValue}></Input>
            <Input
                className="z-10 pointer-events-auto"
                label="Email"
                placeholder="Email"
                value={emailValue}
                setValue={setEmailValue}></Input>
            <Textarea
                className="z-10 pointer-events-auto"
                label="Message"
                placeholder="Message"
                value={messageValue}
                setValue={setMessageValue}></Textarea>
            <Button
                className="z-10 pointer-events-auto"
                text="Submit"
                onClick={() => {
                    submit();
                }}></Button>
        </div>
    );
};

export default Form;
