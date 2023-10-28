import { ReactNode } from "react";

export interface IProjectType {
    _id: string;
    title: string;
    icon?: string;
}

export interface IProject {
    title?: string;
    thumbnail?: string;
    description?: string;
    href?: string;
    type?: IProjectType;
}
