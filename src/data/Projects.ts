import { IProject, IProjectType } from "@/app/interfaces/IProject";
import { BsFillTriangleFill } from "react-icons/bs";
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";

export const Projects: IProject[] = [
    {
        title: "AlvitaNutrition",
        description:
            "Anim aute elit nulla fugiat laboris magna in ullamco. Deserunt ut nulla pariatur dolore ex cillum Lorem deserunt. Non laboris sint nisi nostrud irure. Mollit magna eu nisi ullamco sunt officia non quis pariatur aliqua cupidatat adipisicing ipsum sunt.",
        type: { title: "Next", icon: BsFillTriangleFill },
        thumbnail: "/Project-placeholder.jpg",
        href: "https://alvitanutrition.com/",
    },
    {
        title: "AlvitaNutrition",
        description:
            "Anim aute elit nulla fugiat laboris magna in ullamco. Deserunt ut nulla pariatur dolore ex cillum Lorem deserunt. Non laboris sint nisi nostrud irure. Mollit magna eu nisi ullamco sunt officia non quis pariatur aliqua cupidatat adipisicing ipsum sunt.",
        type: { title: "Next", icon: BsFillTriangleFill },
        thumbnail: "/Project-placeholder.jpg",
        href: "https://alvitanutrition.com/",
    },
    {
        title: "AlvitaNutrition",
        description:
            "Anim aute elit nulla fugiat laboris magna in ullamco. Deserunt ut nulla pariatur dolore ex cillum Lorem deserunt. Non laboris sint nisi nostrud irure. Mollit magna eu nisi ullamco sunt officia non quis pariatur aliqua cupidatat adipisicing ipsum sunt.",
        type: { title: "Next", icon: BsFillTriangleFill },
        thumbnail: "/Project-placeholder.jpg",
        href: "https://alvitanutrition.com/",
    },
    {
        title: "AlvitaNutrition",
        description:
            "Anim aute elit nulla fugiat laboris magna in ullamco. Deserunt ut nulla pariatur dolore ex cillum Lorem deserunt. Non laboris sint nisi nostrud irure. Mollit magna eu nisi ullamco sunt officia non quis pariatur aliqua cupidatat adipisicing ipsum sunt.",
        type: { title: "Next", icon: BsFillTriangleFill },
        thumbnail: "/Project-placeholder.jpg",
        href: "https://alvitanutrition.com/",
    },
];

export const ProjectTypes: IProjectType[] = [
    { title: "React", icon: FaReact },
    { title: "React Native", icon: FaReact },
    { title: "Next", icon: BsFillTriangleFill },
    { title: "Node", icon: FaNodeJs },
    { title: "HTML", icon: FaHtml5 },
    { title: "CSS", icon: FaCss3Alt },
];
