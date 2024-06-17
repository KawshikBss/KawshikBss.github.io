"use client";
import Link from "next/link";
import React from "react";
import NavMenu from "./nav-menu";
import { motion } from "framer-motion";

type Props = {};

function Navbar({}: Props) {
    return (
        <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full bg-[#10e956] py-2 px-4 md:px-16 flex flex-row justify-between items-center"
        >
            <Link
                href={"/"}
                className="text-[#10e956] py-2 md:py-4 px-3 md:px-6 bg-[#12141d] rounded-2xl text-lg md:text-2xl"
            >
                {"<kb/> "}
            </Link>
            <ul className="list-none hidden md:flex flex-row justify-between items-center gap-8">
                <li className="text-[#12141d] hover:bg-[#12141d] transition-all duration-300 ease-in-out py-1 px-2 rounded-lg hover:text-[#FFFFFF] text-base">
                    <Link href={"/"}>Home</Link>
                </li>
                <li className="text-[#12141d] hover:bg-[#12141d] transition-all duration-300 ease-in-out py-1 px-2 rounded-lg hover:text-[#FFFFFF] text-base">
                    <Link href={"/"}>About</Link>
                </li>
                <li className="text-[#12141d] hover:bg-[#12141d] transition-all duration-300 ease-in-out py-1 px-2 rounded-lg hover:text-[#FFFFFF] text-base">
                    <Link href={"/"}>Skills</Link>
                </li>
                <li className="text-[#12141d] hover:bg-[#12141d] transition-all duration-300 ease-in-out py-1 px-2 rounded-lg hover:text-[#FFFFFF] text-base">
                    <Link href={"/"}>Projects</Link>
                </li>
                <li className="text-[#12141d] hover:bg-[#12141d] transition-all duration-300 ease-in-out py-1 px-2 rounded-lg hover:text-[#FFFFFF] text-base">
                    <Link href={"/"}>Experience</Link>
                </li>
                <li className="text-[#12141d] hover:bg-[#12141d] transition-all duration-300 ease-in-out py-1 px-2 rounded-lg hover:text-[#FFFFFF] text-base">
                    <Link href={"/"}>Contact</Link>
                </li>
                <div className="h-8 w-[2px] bg-[#12141d] rounded-xl" />
                <Link
                    href={"/"}
                    className="py-2 px-4 rounded-xl bg-[#12141d] text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#12141d] transition-all duration-300 ease-in-out"
                >
                    Download CV
                </Link>
            </ul>
            <Link
                href={"/"}
                className="md:hidden py-2 px-2 md:px-4 rounded-xl bg-[#12141d] text-[#FFFFFF]"
            >
                Download CV
            </Link>
            <NavMenu />
        </motion.div>
    );
}

export default Navbar;
