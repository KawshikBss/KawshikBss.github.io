import React from "react";
import Carousel from "./carousel";
import Link from "next/link";

type Props = {};

function Projects({}: Props) {
    return (
        <div className="w-full flex flex-col items-center gap-20 py-20">
            <span className="text-[#14e956] font-black text-4xl py-3 px-7 border-4 border-[#0c8c34] rounded-xl bg-[#12141d] uppercase">
                Projects Showcase
            </span>
            <Carousel items={[1, 2, 3]} />
            <Link
                href={"/"}
                className="bg-[#14e956] py-3 px-8 rounded-lg text-lg text-[#12141d] font-black shadow-2xl shadow-[rgba(20,233,86,.74)] outline-offset-8 hover:outline hover:outline-4 outline-[#14e956] transition-all duration-300 ease-in-out"
            >
                View All Projects
            </Link>
        </div>
    );
}

export default Projects;
