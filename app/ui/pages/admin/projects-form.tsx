"use client";
import { createProject, deleteProject } from "@/app/lib/actions/project";
import { ProjectInterface, UserInterface } from "@/app/lib/defenitions";
import React from "react";

type Props = {
    user: UserInterface;
    projects: ProjectInterface[];
};

function ProjectsForm({ user, projects }: Props) {
    return (
        <form className="max-w-xl mx-auto p-4" action={createProject}>
            {user?._id ? (
                <input
                    hidden
                    type="text"
                    name="userId"
                    id="userId"
                    defaultValue={user._id ?? ""}
                />
            ) : (
                ""
            )}
            <h1 className="text-2xl">Project</h1>
            <hr className="mb-4" />
            <div className="mb-4">
                <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white"
                >
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 block w-full text-gray-700 border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>

            <div className="mb-4">
                <label
                    htmlFor="thumbnail"
                    className="block text-sm font-medium text-white"
                >
                    Thumbnail
                </label>
                <input
                    type="text"
                    name="thumbnail"
                    id="thumbnail"
                    className="mt-1 block w-full text-gray-700 border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>

            <div className="mb-4">
                <label
                    htmlFor="description"
                    className="block text-sm font-medium text-white"
                >
                    Description
                </label>
                <input
                    type="text"
                    name="description"
                    id="description"
                    className="mt-1 block w-full text-gray-700 border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>

            <div className="mb-4">
                <label
                    htmlFor="techs"
                    className="block text-sm font-medium text-white"
                >
                    Technologies
                </label>
                <textarea
                    name="techs"
                    id="techs"
                    className="mt-1 block w-full text-gray-700 border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>

            <div className="mb-4">
                <label
                    htmlFor="link"
                    className="block text-sm font-medium text-white"
                >
                    Project Link
                </label>
                <input
                    type="text"
                    name="link"
                    id="link"
                    className="mt-1 block w-full text-gray-700 border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>

            <div className="mb-4">
                <button
                    type="submit"
                    className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Add
                </button>
            </div>
            <ul className="w-3/5 mx-auto">
                {projects?.map((project: ProjectInterface, index: number) => (
                    <li
                        className="flex flex-row justify-between items-center hover:bg-white hover:text-black py-2 px-4 rounded-lg"
                        key={index}
                    >
                        {project.name}{" "}
                        <button
                            onClick={() => deleteProject(project._id ?? "")}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </form>
    );
}

export default ProjectsForm;
