"use client";
import { createSkill, deleteSkill } from "@/app/lib/actions/skills";
import { SkillInterface, UserInterface } from "@/app/lib/defenitions";
import React from "react";

type Props = {
    user: UserInterface;
    skills: SkillInterface[];
};

function SkillsForm({ user, skills }: Props) {
    return (
        <div className="max-w-xl mx-auto p-4">
            <h1 className="text-2xl">Skills</h1>
            <hr className="mb-4" />
            <form
                action={createSkill}
                className="flex flex-row justify-between items-end"
            >
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
                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-white"
                    >
                        Skill
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
                        htmlFor="icon"
                        className="block text-sm font-medium text-white"
                    >
                        Icon
                    </label>
                    <input
                        type="text"
                        name="icon"
                        id="icon"
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
            </form>
            <ul className="w-3/5 mx-auto">
                {skills?.map((skill: SkillInterface, index: number) => (
                    <li
                        className="flex flex-row justify-between items-center hover:bg-white hover:text-black py-2 px-4 rounded-lg"
                        key={index}
                    >
                        {skill.name}{" "}
                        <button onClick={() => deleteSkill(skill._id ?? "")}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SkillsForm;
