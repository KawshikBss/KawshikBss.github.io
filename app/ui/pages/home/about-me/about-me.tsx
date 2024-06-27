"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { UserInterface } from "@/app/lib/defenitions";
import { UserData } from "@/app/lib/data";
import clsx from "clsx";

type Props = {};

function AboutMe({}: Props) {
    return (
        <div
            id="about"
            className="w-full overflow-hidden flex flex-col items-center gap-20 py-20"
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
                About Me
            </motion.span>
            <div className="flex flex-col md:flex-row justify-between items-center">
                <motion.div
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 1.5 }}
                    className="w-full md:w-1/5 h-[50vh] relative"
                >
                    {UserData.images?.map(
                        (imageLink: string, index: number) => (
                            <Image
                                src={imageLink}
                                className={clsx(
                                    "transition-all duration-300 ease-in-out w-48 md:w-80 border-2 border-[#14e956] cursor-pointer rounded-lg hover:scale-110 hover:rotate-0 absolute hover:z-50",
                                    {
                                        "top-8 left-40 rotate-12": index === 0,
                                        "top-20 left-10 -rotate-12":
                                            index === 1,
                                        "inset-0 left-20": index === 2,
                                    }
                                )}
                                alt="about"
                                width={200}
                                height={300}
                            />
                        )
                    )}
                </motion.div>
                <motion.div
                    whileInView={{ x: [100, 0], opacity: [0, 1] }}
                    transition={{ duration: 1 }}
                    className="w-full md:w-3/5 flex flex-col items-start justify-between gap-10 p-5 md:pr-12"
                >
                    <h3>Curious about me?</h3>
                    <p>{UserData?.full_bio ?? "N/A"}</p>
                </motion.div>
            </div>
        </div>
    );
}

export default AboutMe;
