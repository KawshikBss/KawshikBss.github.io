import Drops from "@/app/ui/components/drops";
import React from "react";
import Card from "./card";

type Props = {};

function Experience({}: Props) {
    return (
        <div
            className="w-full flex flex-col items-center gap-20 py-20"
            style={{ perspective: "1800px" }}
        >
            <span className="text-[#14e956] font-black text-4xl py-3 px-7 border-4 border-[#0c8c34] rounded-xl bg-[#12141d] uppercase">
                Experience
            </span>
            <Card index={0} />
            <Card index={1} />
        </div>
    );
}

export default Experience;
