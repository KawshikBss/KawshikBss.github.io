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
    profile_image: "/profile.png",
    images: [
        "https://i.ibb.co/s59vVfh/IMG-5941.jpg",
        "/images/users/IMG_4038.png",
        "/images/users/IMG_4118.png",
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
        thumbnail: "/images/projects/coral.png",
        description: "A multivendors e-commerce website",
        techs: ["react", " nextjs", "postgresql", "vercel"],
        link: "https://coral-coral.vercel.app",
    },
    {
        name: "Disputesend",
        thumbnail: "/images/projects/disputesend.png",
        description: "Pay-After-Deletion Credit Repair",
        techs: ["react", " nextjs", "firebase", "vercel"],
        link: "https://disputesend.com/",
    },
    {
        name: "SnapShop",
        thumbnail: "/images/projects/snapshop.png",
        description: "Mobile app for ordering medicine online",
        techs: ["react-native", "react-query", "laravel", "expo"],
        link: "https://play.google.com/store/apps/details?id=com.zilchdedennota.Snap_Shop&hl=en_US",
    },
    {
        name: "Alvita Nutrition",
        thumbnail: "/images/projects/alvita.png",
        description: "Pharmaceutical Ecommerce and Blogging Website",
        techs: ["react", "nextjs", "react-query", "laravel"],
        link: "https://alvitanutrition.com/shop/",
    },
    {
        name: "Newsbrief",
        thumbnail: "/images/projects/newsbrief.jpg",
        description: "News portal mobile app",
        techs: ["flutter", "dart", "google-api", "laravel"],
        link: "/newsbriefapp.apk",
        mobileApp: true,
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
        thumbnail: "/images/projects/dealerman.png",
        description: "Hazari game tracking app",
        techs: ["flutter"],
        link: "/dealer-man.apk",
        mobileApp: true,
    },
    {
        slug: "newsbrief",
        name: "Newsbrief",
        thumbnail: "/images/projects/newsbrief.jpg",
        description: "News portal mobile app",
        techs: ["flutter", "dart", "google-api", "laravel"],
        link: "/newsbriefapp.apk",
        mobileApp: true,
    },
    {
        slug: "angelica",
        name: "Angelica",
        thumbnail: "/images/projects/angelica.jpg",
        description: "Take control of your health and well-being with Angelica, the intelligent fasting app designed to make intermittent fasting easy, effective, and rewarding.",
        techs: ["flutter", "dart", "google-api", "laravel"],
        link: "/angelica.apk",
        mobileApp: true,
    },
];
