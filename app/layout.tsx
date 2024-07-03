import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/layout/navbar";
import Footer from "./ui/layout/footer";

const inter = Inter({ subsets: ["latin"] });
import localFont from "next/font/local";

const exoSpace = localFont({ src: "../fonts/ExoSpace.ttf" });

export const metadata: Metadata = {
    title: "KawshikBss",
    description: "Portfolio of Kawshik Biswas",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={exoSpace.className}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
