"use client";
import { twMerge } from "tailwind-merge";
import Input from "./input";
import { useState } from "react";
import Textarea from "./textarea";
import Button from "./button";

const CommentForm = ({
    className,
    commentHandler,
}: {
    className?: string;
    commentHandler: Function;
}) => {
    const [nameValue, setNameValue] = useState("");
    const [messageValue, setMessageValue] = useState("");

    return (
        <div
            className={twMerge(
                className,
                "flex flex-col gap-4 bg-slate-100 w-96 lg:w-[500px]"
            )}>
            <Input
                label="Name"
                placeholder="Name"
                value={nameValue}
                setValue={setNameValue}></Input>
            <Textarea
                label="Message"
                placeholder="Message"
                value={messageValue}
                setValue={setMessageValue}></Textarea>
            <Button
                text="Comment"
                onClick={() => {
                    commentHandler(nameValue, messageValue);
                    setNameValue("");
                    setMessageValue("");
                }}></Button>
        </div>
    );
};

export default CommentForm;
