"use client";
import React from "react";
import Carousel from "./carousel";
import Link from "next/link";
import { motion } from "framer-motion";
import { ProjectInterface } from "@/app/lib/defenitions";
import { ProjectsData } from "@/app/lib/data";

type Props = {};

function Projects({}: Props) {
    return (
        <div className="w-full flex flex-col items-center gap-20 py-20">
            <motion.span
                id="projects"
                whileInView={{
                    transform: [
                        "rotateY(-180deg)",
                        "rotateY(0deg)",
                        "rotateY(30deg)",
                        "rotateY(-30deg)",
                        "rotateY(0deg)",
                    ],
                    opacity: 1,
                }}
                transition={{
                    duration: 2,
                }}
                className="text-[#14e956] font-black text-center text-2xl md:text-4xl py-2 md:py-3 px-3 md:px-7 border-4 border-[#0c8c34] rounded-xl bg-[#12141d] uppercase"
            >
                Projects Showcase
            </motion.span>
            {ProjectsData?.length ? <Carousel items={ProjectsData} /> : ""}
            <Link href={"/"}>
                <motion.span
                    animate={{
                        outlineOffset: ["2px", "10px", "2px"],
                        outlineWidth: ["0px", "4px", "0"],
                    }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="bg-[#14e956] py-3 px-8 rounded-lg text-lg text-[#12141d] font-black shadow-2xl shadow-[rgba(20,233,86,.74)] outline outline-4 outline-[#14e956] animate-pulse"
                >
                    View All Projects
                </motion.span>
            </Link>
        </div>
    );
}

export default Projects;
