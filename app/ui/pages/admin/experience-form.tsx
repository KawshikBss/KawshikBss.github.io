"use client";
import {
    createExperience,
    deleteExperience,
} from "@/app/lib/actions/experience";
import { ExperienceInterface, UserInterface } from "@/app/lib/defenitions";
import React from "react";

type Props = {
    user: UserInterface;
    experiences: ExperienceInterface[];
};

function ExperienceForm({ user, experiences }: Props) {
    return (
        <form className="max-w-xl mx-auto p-4" action={createExperience}>
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
            <h1 className="text-2xl">Experience</h1>
            <hr className="mb-4" />
            <div className="mb-4">
                <label
                    htmlFor="company"
                    className="block text-sm font-medium text-white"
                >
                    Company Name
                </label>
                <input
                    type="text"
                    name="company"
                    id="company"
                    className="mt-1 block w-full text-gray-700 border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>

            <div className="mb-4">
                <label
                    htmlFor="logo"
                    className="block text-sm font-medium text-white"
                >
                    Company Logo
                </label>
                <input
                    type="text"
                    name="logo"
                    id="logo"
                    className="mt-1 block w-full text-gray-700 border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>

            <div className="mb-4">
                <label
                    htmlFor="designation"
                    className="block text-sm font-medium text-white"
                >
                    Designation
                </label>
                <input
                    type="text"
                    name="designation"
                    id="designation"
                    className="mt-1 block w-full text-gray-700 border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>

            <div className="mb-4">
                <label
                    htmlFor="works"
                    className="block text-sm font-medium text-white"
                >
                    Responsibilities
                </label>
                <textarea
                    name="works"
                    id="works"
                    className="mt-1 block w-full text-gray-700 border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>

            <div className="mb-4">
                <label
                    htmlFor="link"
                    className="block text-sm font-medium text-white"
                >
                    Company Link
                </label>
                <input
                    type="text"
                    name="link"
                    id="link"
                    className="mt-1 block w-full text-gray-700 border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>

            <div className="mb-4">
                <label
                    htmlFor="dates"
                    className="block text-sm font-medium text-white"
                >
                    Joining and Leaving Dates
                </label>
                <input
                    type="text"
                    name="dates"
                    id="dates"
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
                {experiences?.map(
                    (experience: ExperienceInterface, index: number) => (
                        <li
                            className="flex flex-row justify-between items-center hover:bg-white hover:text-black py-2 px-4 rounded-lg"
                            key={index}
                        >
                            {experience.company}{" "}
                            <button
                                onClick={() =>
                                    deleteExperience(experience._id ?? "")
                                }
                            >
                                Remove
                            </button>
                        </li>
                    )
                )}
            </ul>
        </form>
    );
}

export default ExperienceForm;
