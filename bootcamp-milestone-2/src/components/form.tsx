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
    const [disabled, setDisabled] = useState(false);
    async function handleSubmit(name: string, email: string, message: string) {
        if (name == "" || email == "" || message == "") {
            alert("Error: All fields must be entered");
            return;
        }
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message,
                }),
            });

            if (!response.ok) {
                alert(`Response: ${response.status}`);
                alert("Error: please try resubmitting the form");
            } else {
                alert("Message sent!");
            }
        } catch (error) {
            console.error(error);
            alert("Error: please try resubmitting the form");
        }
        setNameValue("");
        setEmailValue("");
        setMessageValue("");
        setDisabled(false);
    }
    return (
        <div
            className={twMerge(
                "pointer-events-auto max-w-[500px] px-4 w-full flex flex-col justify-center items-center gap-8",
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
                disabled={disabled}
                text="Submit"
                onClick={() => {
                    setDisabled(true);
                    handleSubmit(nameValue, emailValue, messageValue);
                }}></Button>
        </div>
    );
};

export default Form;
