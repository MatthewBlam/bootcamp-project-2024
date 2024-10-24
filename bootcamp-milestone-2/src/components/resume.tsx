import React from "react";

const ResumeSectionEntry = ({ children }: { children?: React.ReactNode }) => {
    return <div>{children}</div>;
};

const ResumeSection = ({ children }: { children?: React.ReactNode }) => {
    return <div>{children}</div>;
};

const ResumeContainer = ({
    name,
    contacts,
    children,
}: {
    name: string;
    contacts: string[];
    children?: React.ReactNode;
}) => {
    return (
        <div>
            <h1 className="text-5xl font-bold mb-4">{name}</h1>
            <div>
                {contacts.map((contact) => {
                    return <p key={contact}>{contact}</p>;
                })}
            </div>
            {children}
        </div>
    );
};

export { ResumeSectionEntry, ResumeSection, ResumeContainer };
