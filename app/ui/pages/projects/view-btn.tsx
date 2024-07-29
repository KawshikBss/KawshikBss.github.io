"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
    link?: string;
    mobileApp: boolean;
};

function ViewBtn({ link, mobileApp }: Props) {
    return (
        <Link href={link ?? ""} target="_blank" className="mt-8">
            <motion.span
                animate={{
                    outlineOffset: ["2px", "16px", "2px"],
                    outlineWidth: ["0px", "4px", "0"],
                }}
                whileHover={{
                    outlineOffset: ["10px"],
                    outlineWidth: ["4px"],
                }}
                transition={{ repeat: Infinity, duration: 0.6 }}
                className="bg-[#14e956] py-3 px-8 rounded-lg text-lg text-[#12141d] font-black shadow-2xl shadow-[rgba(20,233,86,.74)] outline outline-4 outline-[#14e956] animate-pulse"
            >
                {mobileApp ? "download" : "visit"}
            </motion.span>
        </Link>
    );
}

export default ViewBtn;
