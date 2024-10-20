import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "../components/navbar";

import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Matthew Blam Personal Website",
    description: "A personal website for Matthew Blam",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={twMerge(inter.className, "text-slate-900")}>
                <Navbar></Navbar>
                {children}
            </body>
        </html>
    );
}
