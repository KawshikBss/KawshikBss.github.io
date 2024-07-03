"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaHandPointLeft, FaHandPointRight } from "react-icons/fa";
import { AiOutlineEnter } from "react-icons/ai";
import { motion } from "framer-motion";
import { ProjectInterface } from "@/app/lib/defenitions";

type Props = {
    items: ProjectInterface[];
};

function Carousel({ items }: Props) {
    const [currentItem, setCurrentItem] = useState<number>(0);
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
            whileInView={{ left: [-100, 0] }}
            transition={{ duration: 1.7 }}
            className="w-full h-[80vh] md:h-[100vh] relative"
        >
            <div
                className={`h-full bg-cover bg-center`}
                style={{
                    background: `url('${items[currentItem].thumbnail}')`,
                    WebkitFilter: "blur(8px)",
                }}
            />
            <div className="w-full h-full flex flex-row items-center justify-around py-20 absolute inset-0">
                <FaHandPointLeft
                    onClick={prev}
                    className="drop-shadow-xl w-[40px] h-[40px] md:w-[80px] md:h-[80px] cursor-pointer rotate-45 hover:rotate-0 hover:scale-110 stroke-[12px] stroke-[#1e2128] text-[#fdfdfd] transition-all duration-300 ease-in-out"
                />
                <div className="shadow-2xl w-[260px] md:w-[600px] rounded-xl bg-[#fdfdfd] my-20">
                    <Image
                        src={items[currentItem].thumbnail}
                        className="w-full h-2/5 rounded-xl object-contain"
                        alt="project"
                        width={240}
                        height={240}
                    />
                    <div className="w-full p-3">
                        <h4 className="text-[#14e956] text-base md:text-2xl font-black mb-1 md:mb-2">
                            {items[currentItem].name}
                        </h4>
                        <p className="text-[#1e2128] text-xs md:text-base capitalize font-semibold mb-1 md:mb-2">
                            {items[currentItem].description}
                        </p>
                        <div className="w-full flex flex-row items-center flex-wrap gap-4 mb-2 md:mb-4">
                            {items[currentItem].techs.map(
                                (tech: string, index: number) => (
                                    <span
                                        key={index}
                                        className="bg-[#1e2128] py-1 px-2 rounded-2xl text-[#fffff4] font-bold lowercase"
                                    >
                                        {tech}
                                    </span>
                                )
                            )}
                        </div>
                        <Link
                            href={items[currentItem].link ?? "/"}
                            target="_blank"
                            className="bg-[#fffff4] md:py-1 px-1 md:px-2 rounded-2xl text-[#1e2128] border-2 border-[#1e2128] font-bold lowercase flex items-center gap-1 w-fit"
                        >
                            visit <AiOutlineEnter />
                        </Link>
                    </div>
                </div>
                <FaHandPointRight
                    onClick={next}
                    className="drop-shadow-xl w-[40px] h-[40px] md:w-[80px] md:h-[80px] -rotate-45 hover:rotate-0 hover:scale-110 cursor-pointer stroke-[12px] stroke-[#1e2128] text-[#fdfdfd] transition-all duration-300 ease-in-out"
                />
            </div>
        </motion.div>
    );
}

export default Carousel;
