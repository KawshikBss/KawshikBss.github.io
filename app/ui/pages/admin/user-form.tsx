import { createSettings, updateSettings } from "@/app/lib/actions/settings";
import { UserInterface } from "@/app/lib/defenitions";
import React from "react";

type Props = {
    user: UserInterface;
};

function UserForm({ user }: Props) {
    return (
        <form
            className="max-w-xl mx-auto p-4"
            action={user?._id ? updateSettings : createSettings}
        >
            {user?._id ? (
                <input
                    hidden
                    type="text"
                    name="id"
                    id="id"
                    defaultValue={user?._id ?? ""}
                />
            ) : (
                ""
            )}
            <h1 className="text-2xl">Introduction</h1>
            <hr className="mb-4" />
            <div className="mb-4">
                <label
                    htmlFor="first_name"
                    className="block text-sm font-medium text-white"
                >
                    First Name
                </label>
                <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    defaultValue={user?.first_name ?? ""}
                    className="mt-1 block w-full text-gray-700 border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>

            <div className="mb-4">
                <label
                    htmlFor="last_name"
                    className="block text-sm font-medium text-white"
                >
                    Last Name
                </label>
                <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    defaultValue={user?.last_name ?? ""}
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
                    defaultValue={user?.designation ?? ""}
                    className="mt-1 block w-full text-gray-700 border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>

            <div className="mb-4">
                <label
                    htmlFor="profile_image"
                    className="block text-sm font-medium text-white"
                >
                    Profile Image URL
                </label>
                <input
                    type="text"
                    name="profile_image"
                    id="profile_image"
                    defaultValue={user?.profile_image ?? ""}
                    className="mt-1 block w-full text-gray-700 border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>

            <div className="mb-4">
                <label
                    htmlFor="short_bio"
                    className="block text-sm font-medium text-white"
                >
                    Short Bio
                </label>
                <textarea
                    name="short_bio"
                    id="short_bio"
                    defaultValue={user?.short_bio ?? ""}
                    className="mt-1 block w-full text-gray-700 border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <h1 className="text-2xl">About Me</h1>
            <hr className="mb-4" />
            <div className="mb-4">
                <label
                    htmlFor="full_bio"
                    className="block text-sm font-medium text-white"
                >
                    Full Bio
                </label>
                <textarea
                    name="full_bio"
                    id="full_bio"
                    defaultValue={user?.full_bio ?? ""}
                    className="mt-1 block w-full text-gray-700 border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>

            <div className="mb-4">
                <button
                    type="submit"
                    className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Submit
                </button>
            </div>
        </form>
    );
}

export default UserForm;
