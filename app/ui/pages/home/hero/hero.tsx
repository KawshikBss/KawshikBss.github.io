"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { UserInterface } from "@/app/lib/defenitions";
import { UserData } from "@/app/lib/data";

type Props = {};

function Hero({}: Props) {
    return (
        <div className="w-full bg-[url('/hero-bg.jpg')] bg-cover bg-center">
            <div className="w-full overflow-x-hidden bg-black/70 flex flex-col-reverse md:flex-row justify-between items-center gap-5 md:gap-0 px-10 md:px-20 pt-16 md:pt-32 pb-4 md:pb-8">
                <motion.div
                    whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                    transition={{ duration: 1 }}
                    className="w-full md:w-2/5 flex flex-col items-start gap-7"
                >
                    <span className="text-[#14e956] text-xl bg-[rgba(20,233,88,.157)] py-2 px-4 rounded-xl capitalize">
                        Hi there! I'm {UserData?.first_name ?? "N/A"}{" "}
                        {UserData?.last_name ?? "N/A"}
                    </span>
                    <h1 className="text-[#f5f5f5] text-5xl font-black capitalize">
                        An Innovative{" "}
                        <span className="text-[#14e956]">
                            Software Developer
                        </span>{" "}
                        Specializing in Scalable{" "}
                        <span className="text-[#14e956]">Web</span> and{" "}
                        <span className="text-[#14e956]">Mobile</span>{" "}
                        Applications.
                    </h1>
                    <p className="text-[#f5f5f5] text-base font-bold">
                        {UserData?.short_bio ?? "N/A"}
                    </p>
                </motion.div>
                <motion.img
                    whileInView={{ x: [100, 0], opacity: [0, 1] }}
                    transition={{ duration: 1 }}
                    src={UserData?.profile_image}
                    className="w-full md:w-2/5 h-4/5 rounded-3xl border-b-4 border-r-4 rounded-tr-3xl border-[#14e956]"
                    alt="Kawshik Biswas"
                    width={300}
                    height={600}
                />
            </div>
        </div>
    );
}

export default Hero;
