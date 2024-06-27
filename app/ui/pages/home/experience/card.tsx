import { ExperienceInterface } from "@/app/lib/defenitions";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

type Props = {
    experience: ExperienceInterface;
    index: number;
};

function Card({ experience, index }: Props) {
    return (
        <div
            className={clsx(
                "w-3/5 md:w-2/5 flex flex-col md:flex-row items-start justify-between gap-2 md:gap-auto p-4 md:p-8 bg-[#fdfdfd] shadow-lg shadow-[rgba(20,233,86,.74)] rounded-xl hover:scale-125 transform transition duration-300 ease-in-out",
                {
                    "experience-card": index % 2 === 0,
                    "experience-card-right": index % 2 !== 0,
                }
            )}
        >
            {" "}
            <div className="w-full md:w-fit h-full flex flex-col-reverse md:flex-col items-center md:items-start justify-between gap-4 md:gap-auto">
                <span className="text-[#12141d] text-lg font-extrabold">
                    {experience.company ?? "N/A"}
                </span>
                <Image
                    src={experience.logo ?? "N/A"}
                    className="w-20 h-20 rounded-lg mt-4"
                    alt="company"
                    width={100}
                    height={100}
                />
            </div>
            <div className="w-full md:w-fit flex flex-col items-start justify-between mx-4 gap-2 md:gap-4">
                <span className="text-[#12141d] text-lg font-bold text-center">
                    {experience.designation ?? "N/A"}
                </span>
                <ul className="text-[#12141d] text-base list-disc ml-4">
                    {experience.works.map((item: string, itemIndex: number) => (
                        <li key={itemIndex}>{item}</li>
                    )) ?? "N/A"}
                </ul>
            </div>
            <div className="w-full md:w-fit flex flex-col items-center md:items-start justify-between gap-4">
                <span className="text-[#12141d] text-base font-semibold">
                    {experience.dates ?? "N/A"}
                </span>
            </div>
        </div>
    );
}

export default Card;
