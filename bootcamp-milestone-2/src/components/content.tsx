import React from "react";

const Content = ({ children }: { children: React.ReactNode }) => {
    return <main className="px-14 py-14">{children}</main>;
};

export default Content;
