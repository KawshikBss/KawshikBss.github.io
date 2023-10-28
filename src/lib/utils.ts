import { AiFillCode } from "react-icons/ai";
import { FaCircleInfo } from "react-icons/fa6";
import { RiGamepadFill } from "react-icons/ri";
import { FaLinkedinIn, FaFacebookF, FaGithub } from "react-icons/fa";
import { BsFillTriangleFill } from "react-icons/bs";
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";

const icons = [
    { name: "linkedin", icon: FaLinkedinIn },
    { name: "facebook", icon: FaFacebookF },
    { name: "github", icon: FaGithub },
    { name: "react", icon: FaReact },
    { name: "next", icon: BsFillTriangleFill },
    { name: "node", icon: FaNodeJs },
    { name: "html", icon: FaHtml5 },
    { name: "css", icon: FaCss3Alt },
];

export const appendStyle = (styles: string[]): string => {
    return styles.join(" ");
};

export const getIcon = (icon: string): React.FunctionComponent => {
    for (let i = 0; i < icons.length; i++) {
        if (icons[i].name === icon) return icons[i].icon;
    }
    return FaCircleInfo;
};
