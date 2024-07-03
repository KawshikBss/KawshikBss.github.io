"use client";
import React from "react";
import { motion } from "framer-motion";
import { SkillInterface } from "@/app/lib/defenitions";
import { SkillsData } from "@/app/lib/data";
import RenderIcon from "@/app/ui/components/render-icon";

type Props = {};

export default function Skills({}: Props) {
    return (
        <div
            id="skills"
            className="w-full flex flex-col items-center gap-20 py-32"
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
                Skillset
            </motion.span>
            <motion.div
                whileInView={{
                    rotate: [
                        "30deg",
                        "0deg",
                        "-15deg",
                        "5deg",
                        "-5deg",
                        "0deg",
                    ],
                }}
                transition={{
                    duration: 2,
                }}
                className="w-fit grid grid-cols-2 md:grid-cols-6 gap-2 bg-[#0c8c34] p-4 rounded-3xl"
            >
                {SkillsData?.map((skill: SkillInterface, index: number) => (
                    <span
                        key={index}
                        className="flex flex-row justify-between items-center gap-2 rounded-xl px-2 py-4 bg-[#021709] text-sm md:text-base text-[#f5f5f5] capitalize"
                    >
                        <RenderIcon
                            name={skill.icon}
                            className="text-[#0c8c34] w-[20px] h-[20px] md:w-[27px] md:h-[27px]"
                        />
                        <span>{skill.name}</span>
                    </span>
                ))}
            </motion.div>
        </div>
    );
}
