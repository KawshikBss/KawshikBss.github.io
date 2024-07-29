import {
    ExperienceInterface,
    ProjectInterface,
    SkillInterface,
    UserInterface,
} from "./defenitions";

export const UserData = {
    first_name: "Kawshik",
    last_name: "Biswas",
    designation: "Software Developer",
    profile_image:
        "https://i.ibb.co/nQV4xrn/7-BAF7071-EB3-C-4-F97-8-B0-D-9-F817-E0-FFBD3-optimized-950.png",
    images: [
        "https://i.ibb.co/s59vVfh/IMG-5941.jpg",
        "https://i.ibb.co/5Mqrspq/IMG-4038.png",
        "https://i.ibb.co/K2yd6rw/IMG-4118.png",
    ],
    short_bio:
        "Experienced software developer with over 2 years in web and mobile application development. Expert in React, Next.js, and JavaScript, with a keen enthusiasm for learning new technologies. Known for crafting unique solutions to complex problems, continuously driving innovation and efficiency.",
    full_bio:
        "As a Full Stack Developer with real life experience in web development and mobile app development, I have a passion for creating innovative solutions that\r\nmeet user needs. My key skills include ReactJS, React Native, NextJS, ExpressJS, NodeJS, and Git, and I have a strong understanding of API and SOLID programming concepts. I am committed to lifelong learning and keeping up with the latest trends in technology. I approach every project with a can-do attitude and firmly believe that if it was developed by someone else, it can be developed again - and if it was never tried, I'm willing to take on the challenge. With my technical expertise, problem-solving skills, and commitment to excellence, I am confident that I would be a valuable asset to any team.",
} as UserInterface;

export const SkillsData = [
    { name: "React", icon: "React" },
    { name: "React Native", icon: "React" },
    { name: "NextJS", icon: "NextJS" },
    { name: "Node", icon: "Node" },
    { name: "Express", icon: "Express" },
    { name: "Laravel", icon: "Laravel" },
    { name: "Python", icon: "Python" },
    { name: "Pygame", icon: "Laravel" },
    { name: "MongoDB", icon: "MongoDB" },
    { name: "Postgresql", icon: "Postgresql" },
    { name: "Vercel", icon: "vercel" },
    { name: "Algorithms", icon: "Algorithms" },
    { name: "DataStructures", icon: "DataStructures" },
] as SkillInterface[];

export const ProjectsData = [
    {
        name: "CORA'L",
        thumbnail: "https://i.ibb.co/cJVmmX0/Screenshot-2024-06-27-181135.png",
        description: "A multivendors e-commerce website",
        techs: ["react", " nextjs", "postgresql", "vercel"],
        link: "https://coral-coral.vercel.app",
    },
    {
        name: "Disputesend",
        thumbnail: "https://i.ibb.co/kxMZVtf/Screenshot-2024-06-28-034603.png",
        description: "Pay-After-Deletion Credit Repair",
        techs: ["react", " nextjs", "firebase", "vercel"],
        link: "https://disputesend.com/",
    },
    {
        name: "SnapShop",
        thumbnail: "https://i.ibb.co/GFXv7rb/Screenshot-2024-06-28-035047.png",
        description: "Mobile app for ordering medicine online",
        techs: ["react-native", "react-query", "laravel", "expo"],
        link: "https://play.google.com/store/apps/details?id=com.zilchdedennota.Snap_Shop&hl=en_US",
    },
    {
        name: "Alvita Nutrition",
        thumbnail: "https://i.ibb.co/hVdLv2D/Screenshot-2024-06-28-034336.png",
        description: "Pharmaceutical Ecommerce and Blogging Website",
        techs: ["react", "nextjs", "react-query", "laravel"],
        link: "https://alvitanutrition.com/shop/",
    },
] as ProjectInterface[];

export const ExperienceData = [
    {
        company: "SohojWare",
        logo: "https://sohojware.com/assets/logo.png",
        designation: "Sr. Software Developer",
        works: [
            "Developing and maintaining modern websites",
            "Developing and maintaining mobile applications",
            "Staying up to date with frameworks and latest practices",
        ],
        dates: "2022-present",
        link: "https://sohojware.com/",
    },
] as ExperienceInterface[];

export const ContactsData = {
    socialLinks: [
        {
            name: "LinkedIn",
            icon: "LinkedIn",
            link: "https://www.linkedin.com/in/kawshikbss/",
            color: "#0a66c2",
        },
        {
            name: "Github",
            icon: "Github",
            link: "https://github.com/KawshikBss",
            color: "#0d1117",
        },
        {
            name: "Instagram",
            icon: "Instagram",
            link: "https://www.instagram.com/kawshik_bss/",
            color: "#f92e3e",
        },
    ],
    mail: "kawshikbss@gmail.com",
};

export const SeperateProjects = [
    {
        slug: "dealer-man",
        name: "Dealer Man",
        thumbnail: "/dealer-man-thumbnail.png",
        description: "Hazari game tracking app",
        techs: ["flutter"],
        link: "/dealer-man.apk",
        mobileApp: true,
    },
];
