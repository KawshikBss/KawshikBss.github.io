import { ContactsData } from "@/app/lib/data";
import Link from "next/link";
import React from "react";
import RenderIcon from "../components/render-icon";

type Props = {};

function Footer({}: Props) {
    return (
        <div className="w-full">
            <ul className="w-full flex flex-col md:flex-row items-center">
                {ContactsData.socialLinks.map((social: any, index: number) => (
                    <li
                        key={index}
                        className="w-full md:w-1/3 px-5 py-4 text-xl font-black overflow-hidden"
                        style={{
                            backgroundColor: social.color ?? "#000",
                        }}
                    >
                        <Link
                            href={social.link}
                            target="_blank"
                            className="flex flex-row justify-between hover:justify-center hover:gap-5 hover:scale-125 hover:shadow-lg items-center transition-all duration-500 ease-in-out"
                        >
                            {social.name}
                            <RenderIcon
                                name={social.icon}
                                className="w-10 h-10 text-white"
                            />
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="w-full py-5 bg-[#10e956] text-white">
                <Link
                    href={`mailto:${ContactsData.mail}`}
                    className="text-3xl w-fit block capitalize mx-auto font-black"
                >
                    Shoot me a mail
                </Link>
            </div>
        </div>
    );
}

export default Footer;
