"use client";
import React from "react";
import Card from "./card";
import { motion } from "framer-motion";
import { ExperienceInterface } from "@/app/lib/defenitions";
import { ExperienceData } from "@/app/lib/data";

type Props = {};

function Experience({}: Props) {
    return (
        <div
            id="experience"
            className="w-full flex flex-col items-center gap-20 py-20"
            style={{ perspective: "1800px" }}
        >
            <motion.span
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
                Experience
            </motion.span>
            {ExperienceData.map(
                (experience: ExperienceInterface, index: number) => (
                    <Card key={index} experience={experience} index={index} />
                )
            )}
        </div>
    );
}

export default Experience;
