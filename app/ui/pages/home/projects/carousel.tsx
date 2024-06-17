"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaHandPointLeft, FaHandPointRight } from "react-icons/fa";
import { AiOutlineEnter } from "react-icons/ai";
import { motion } from "framer-motion";

type Props = {
    items: number[];
};

function Carousel({ items }: Props) {
    const [currentItem, setCurrentItem] = useState<number>(items[0] ?? 0);
    const prev = () =>
        setCurrentItem((prev) => {
            return prev > 0 ? prev - 1 : prev;
        });
    const next = () =>
        setCurrentItem((prev) => {
            return prev + 1 < items.length ? prev + 1 : prev;
        });
    return (
        <motion.div
            whileInView={{ left: [-1000, 0] }}
            transition={{ duration: 1.7}}
            className="w-full h-[80vh] md:h-[100vh] relative"
        >
            <div
                className="h-full bg-[url('/hero-bg.jpg')] bg-cover bg-center"
                style={{ WebkitFilter: "blur(8px)" }}
            />
            <div className="w-full h-full flex flex-row items-center justify-around py-20 absolute inset-0">
                <FaHandPointLeft
                    onClick={prev}
                    className="w-[30px] h-[30px] md:w-[60px] md:h-[60px] cursor-pointer rotate-45 hover:rotate-0 hover:scale-110 text-[#fdfdfd] transition-all duration-300 ease-in-out"
                />
                <div className="w-[260px] md:w-[600px] rounded-xl bg-[#fdfdfd] my-20">
                    <Image
                        src={"/hero-bg.jpg"}
                        className="w-full h-2/5 rounded-xl object-contain"
                        alt="project"
                        width={240}
                        height={240}
                    />
                    <div className="w-full p-3">
                        <h4 className="text-[#14e956] text-base md:text-2xl font-black mb-1 md:mb-2">
                            {currentItem}
                        </h4>
                        <p className="text-[#1e2128] text-xs md:text-base capitalize font-semibold mb-1 md:mb-2">
                            Manage your phone contacts the easy way. create,
                            update and delete your personal contacts all from
                            one app. This is a MERN stack app with react redux
                            toolkit. Find source code on my github
                        </p>
                        <div className="w-full flex flex-row items-center flex-wrap gap-4 mb-2 md:mb-4">
                            <span className="bg-[#1e2128] py-1 px-2 rounded-2xl text-[#fffff4] font-bold lowercase">
                                react
                            </span>
                            <span className="bg-[#1e2128] py-1 px-2 rounded-2xl text-[#fffff4] font-bold lowercase">
                                react
                            </span>
                            <span className="bg-[#1e2128] py-1 px-2 rounded-2xl text-[#fffff4] font-bold lowercase">
                                react
                            </span>
                        </div>
                        <Link
                            href={"/"}
                            className="bg-[#fffff4] md:py-1 px-1 md:px-2 rounded-2xl text-[#1e2128] border-2 border-[#1e2128] font-bold lowercase flex items-center gap-1 w-fit"
                        >
                            visit <AiOutlineEnter />
                        </Link>
                    </div>
                </div>
                <FaHandPointRight
                    onClick={next}
                    className="w-[30px] h-[30px] md:w-[60px] md:h-[60px] -rotate-45 hover:rotate-0 hover:scale-110 cursor-pointer text-[#fdfdfd] transition-all duration-300 ease-in-out"
                />
            </div>
        </motion.div>
    );
}

export default Carousel;
