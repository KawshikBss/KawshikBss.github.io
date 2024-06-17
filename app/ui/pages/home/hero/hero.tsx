"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
                        Hi there! I'm Kawshik Biswas
                    </span>
                    <h1 className="text-[#f5f5f5] text-5xl font-black capitalize">
                        a{" "}
                        <span className="text-[#14e956]">
                            Frontend Engineer
                        </span>
                        . I help startups{" "}
                        <span className="text-[#14e956]">launch</span> and{" "}
                        <span className="text-[#14e956]">grow</span> their
                        products
                    </h1>
                    <p className="text-[#f5f5f5] text-base font-bold">
                        I am a software engineer with more than four years of
                        experience. Recognized as a practical and effective
                        developer, experienced in leading cross-functional teams
                        in a time-pressured setting to complete projects on
                        schedule and within budget.
                    </p>
                </motion.div>
                <motion.img
                    whileInView={{ x: [100, 0], opacity: [0, 1] }}
                    transition={{ duration: 1 }}
                    src={"/profile.png"}
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
