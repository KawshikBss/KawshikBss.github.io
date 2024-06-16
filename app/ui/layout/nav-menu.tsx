"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdOutlineGridView, MdOutlineMailOutline } from "react-icons/md";
import { FiUser, FiCode, FiMonitor, FiEdit } from "react-icons/fi";
import clsx from "clsx";

type Props = {};

function NavMenu({}: Props) {
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => setOpenMenu((prev) => !prev);

    return (
        <ul
            className={clsx(
                "scale-75 w-fit list-none flex md:hidden flex-col items-center gap-3 p-2 rounded-full bg-[#1A1E23] border-2 border-[#FFFFFF] overflow-hidden transition-all duration-500 ease-in-out",
                { "max-h-[500px]": openMenu, "max-h-[60px]": !openMenu }
            )}
        >
            <li
                className={clsx(
                    "p-2 rounded-full bg-transparent hover:bg-white text-[#FFFFFF] hover:text-[#292F36] cursor-pointer transition-all duration-500",
                    {
                        "rotate-45 scale-110": openMenu,
                    }
                )}
                onClick={toggleMenu}
            >
                <MdOutlineGridView className="w-6 h-6" />
            </li>
            <li
                className={clsx(
                    "p-2 rounded-full bg-transparent hover:bg-white text-[#FFFFFF] hover:text-[#292F36] transition-all duration-500",
                    {
                        "scale-100 opacity-100": openMenu,
                        "scale-0 opacity-0": !openMenu,
                    }
                )}
            >
                <Link href={"/"}>
                    <FiUser className="w-6 h-6" />
                </Link>
            </li>
            <li
                className={clsx(
                    "p-2 rounded-full bg-transparent hover:bg-white text-[#FFFFFF] hover:text-[#292F36] transition-all duration-500",
                    {
                        "scale-100 opacity-100": openMenu,
                        "scale-0 opacity-0": !openMenu,
                    }
                )}
            >
                <Link href={"/"}>
                    <FiCode className="w-6 h-6" />
                </Link>
            </li>
            <li
                className={clsx(
                    "p-2 rounded-full bg-transparent hover:bg-white text-[#FFFFFF] hover:text-[#292F36] transition-all duration-500",
                    {
                        "scale-100 opacity-100": openMenu,
                        "scale-0 opacity-0": !openMenu,
                    }
                )}
            >
                <Link href={"/"}>
                    <FiMonitor className="w-6 h-6" />
                </Link>
            </li>
            <li
                className={clsx(
                    "p-2 rounded-full bg-transparent hover:bg-white text-[#FFFFFF] hover:text-[#292F36] transition-all duration-500",
                    {
                        "scale-100 opacity-100": openMenu,
                        "scale-0 opacity-0": !openMenu,
                    }
                )}
            >
                <Link href={"/"}>
                    <FiEdit className="w-6 h-6" />
                </Link>
            </li>
            <li
                className={clsx(
                    "p-2 rounded-full bg-transparent hover:bg-white text-[#FFFFFF] hover:text-[#292F36] transition-all duration-500",
                    {
                        "scale-100 opacity-100": openMenu,
                        "scale-0 opacity-0": !openMenu,
                    }
                )}
            >
                <Link href={"/"}>
                    <MdOutlineMailOutline className="w-6 h-6" />
                </Link>
            </li>
        </ul>
    );
}

export default NavMenu;
