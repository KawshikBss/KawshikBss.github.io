export type UserInterface = {
    _id?: string;
    first_name: string;
    last_name: string;
    designation: string;
    profile_image?: string;
    images?: string[];
    short_bio: string;
    full_bio: string;
};

export type SkillInterface = {
    _id?: string;
    name: string;
    icon: string;
    userId: string;
};

export type ProjectInterface = {
    _id?: string;
    thumbnail: string;
    name: string;
    description: string;
    userId: string;
    techs: string[];
    link?: string;
};

export type ExperienceInterface = {
    _id?: string;
    logo: string;
    company: string;
    designation: string;
    userId: string;
    works: string[];
    dates: string;
    link?: string;
};
