import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import MotionWrapper from "@/components/motion-wrapper";
import Background from "@/components/background";
import Navbar from "@/components/navbar";

import { Provider as JotaiProvider } from "jotai";
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
        <html lang="en" className="w-full h-full">
            <JotaiProvider>
                <body
                    className={twMerge(
                        inter.className,
                        "bg-slate-100 text-slate-900 w-full h-full overflow-x-hidden overflow-y-scroll"
                    )}>
                    <MotionWrapper>
                        <Background></Background>
                        <Navbar></Navbar>
                        {children}
                    </MotionWrapper>
                </body>
            </JotaiProvider>
        </html>
    );
}
