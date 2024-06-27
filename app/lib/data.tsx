import { ProjectInterface, SkillInterface, UserInterface } from "./defenitions";

export const UserData = {
    first_name: "Kawshik",
    last_name: "Biswas",
    designation: "Software Developer",
    profile_image:
        "https://i.ibb.co/nQV4xrn/7-BAF7071-EB3-C-4-F97-8-B0-D-9-F817-E0-FFBD3-optimized-950.png",
    short_bio:
        "Experienced software developer with over 2 years in web and mobile application development. Expert in React, Next.js, and JavaScript, with a keen enthusiasm for learning new technologies. Known for crafting unique solutions to complex problems, continuously driving innovation and efficiency.",
    full_bio:
        "As a Full Stack Developer with real life experience in web development and mobile app development, I have a passion for creating innovative solutions that\r\nmeet user needs. My key skills include ReactJS, React Native, NextJS, ExpressJS, NodeJS, and Git, and I have a strong understanding of API and SOLID programming concepts. I am committed to lifelong learning and keeping up with the latest trends in technology. I approach every project with a can-do attitude and firmly believe that if it was developed by someone else, it can be developed again - and if it was never tried, I'm willing to take on the challenge. With my technical expertise, problem-solving skills, and commitment to excellence, I am confident that I would be a valuable asset to any team.",
} as UserInterface;

export const SkillsData = [
    { name: "React", icon: "React" },
] as SkillInterface[];

export const ProjectsData = [
    {
        name: "CORA'L",
        thumbnail: "https://i.ibb.co/cJVmmX0/Screenshot-2024-06-27-181135.png",
        description: "A multivendors e-commerce website",
        userId: "667d280da9fed2294a2b6d00",
        techs: ["react", " nextjs", " postgresql", " vercel"],
        link: "https://coral-coral.vercel.app",
    },
] as ProjectInterface[];
