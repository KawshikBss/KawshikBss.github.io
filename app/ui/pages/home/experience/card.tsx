import clsx from "clsx";
import Image from "next/image";
import React from "react";

type Props = {
    index: number;
};

function Card({ index }: Props) {
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
                    Company
                </span>
                <Image
                    src={"/sjlogo.png"}
                    className="w-20 h-20 rounded-lg mt-4"
                    alt="company"
                    width={100}
                    height={100}
                />
            </div>
            <div className="w-full md:w-fit flex flex-col items-start justify-between gap-2 md:gap-4">
                <span className="text-[#12141d] text-lg font-bold text-center">
                    Sr. Software Developer
                </span>
                <ul className="text-[#12141d] text-base list-disc ml-4">
                    <li>responsibilities</li>
                    <li>responsibilities</li>
                    <li>responsibilities</li>
                </ul>
            </div>
            <div className="w-full md:w-fit flex flex-col items-center md:items-start justify-between gap-4">
                <span className="text-[#12141d] text-base font-semibold">
                    2022-present
                </span>
            </div>
        </div>
    );
}

export default Card;
