import React from "react";
import {
    FaGithub,
    FaInstagram,
    FaLaravel,
    FaLinkedin,
    FaNodeJs,
    FaPython,
    FaReact,
} from "react-icons/fa";
import { PiTreeStructureFill } from "react-icons/pi";
import {
    SiExpress,
    SiMongodb,
    SiNextdotjs,
    SiPostgresql,
    SiThealgorithms,
    SiVercel,
} from "react-icons/si";

type Props = {
    name: string;
    className: string;
};

function RenderIcon({ name, className }: Props) {
    switch (name.toLowerCase()) {
        case "linkedin":
            return <FaLinkedin className={className} />;
        case "github":
            return <FaGithub className={className} />;
        case "instagram":
            return <FaInstagram className={className} />;
        case "react":
            return <FaReact className={className} />;
        case "nextjs":
            return <SiNextdotjs className={className} />;
        case "node":
            return <FaNodeJs className={className} />;
        case "express":
            return <SiExpress className={className} />;
        case "laravel":
            return <FaLaravel className={className} />;
        case "python":
            return <FaPython className={className} />;
        case "mongodb":
            return <SiMongodb className={className} />;
        case "postgresql":
            return <SiPostgresql className={className} />;
        case "vercel":
            return <SiVercel className={className} />;
        case "algorithms":
            return <SiThealgorithms className={className} />;
        case "datastructures":
            return <PiTreeStructureFill className={className} />;
        default:
            return <></>;
    }
}

export default RenderIcon;
