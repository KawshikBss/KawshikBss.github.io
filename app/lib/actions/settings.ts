"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const UserSettingsSchema = z.object({
    id: z.string(),
    first_name: z.string().min(2, { message: "Please Enter First Name" }),
    last_name: z.string().min(2, { message: "Please Enter Last Name" }),
    designation: z.string().min(2, { message: "Please Enter Designation" }),
    profile_image: z.string(),
    short_bio: z
        .string()
        .min(2, { message: "Please Enter A Short Introduction" }),
    full_bio: z.string().min(2, { message: "Please Enter A Bio" }),
});

const UserCreateSchema = UserSettingsSchema.omit({ id: true });

export const createSettings = async (formData: FormData) => {
    const validatedFields = UserCreateSchema.safeParse({
        first_name: formData.get("first_name"),
        last_name: formData.get("last_name"),
        designation: formData.get("designation"),
        profile_image: formData.get("profile_image"),
        short_bio: formData.get("short_bio"),
        full_bio: formData.get("full_bio"),
    });

    if (!validatedFields.success) {
        return { errors: validatedFields.error.flatten().fieldErrors };
    }

    const setting = {
        first_name: validatedFields.data.first_name,
        last_name: validatedFields.data.last_name,
        designation: validatedFields.data.designation,
        profile_image: validatedFields.data.profile_image,
        short_bio: validatedFields.data.short_bio,
        full_bio: validatedFields.data.full_bio,
    };

    const response = await fetch(
        "https://kawshikbss.github.io/api/settings/user",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(setting),
        }
    );

    if (response.status === 200) {
        revalidatePath("/");
        revalidatePath("/admin/user-settings");
    }
};
export const updateSettings = async (formData: FormData) => {
    const validatedFields = UserSettingsSchema.safeParse({
        id: formData.get("id"),
        first_name: formData.get("first_name"),
        last_name: formData.get("last_name"),
        designation: formData.get("designation"),
        profile_image: formData.get("profile_image"),
        short_bio: formData.get("short_bio"),
        full_bio: formData.get("full_bio"),
    });

    if (!validatedFields.success) {
        return { errors: validatedFields.error.flatten().fieldErrors };
    }

    const setting = {
        _id: validatedFields.data.id,
        first_name: validatedFields.data.first_name,
        last_name: validatedFields.data.last_name,
        designation: validatedFields.data.designation,
        profile_image: validatedFields.data.profile_image,
        short_bio: validatedFields.data.short_bio,
        full_bio: validatedFields.data.full_bio,
    };

    const response = await fetch(
        "https://kawshikbss.github.io/api/settings/user",
        {
            method: "PUT",
            body: JSON.stringify(setting),
        }
    );

    if (response.status === 200) {
        revalidatePath("/");
        revalidatePath("/admin/user-settings");
    }
};
