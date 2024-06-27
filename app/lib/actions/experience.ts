"use server";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import clientPromise from "../mongo";
import { ObjectId } from "mongodb";

const ExperienceSchema = z.object({
    company: z.string().min(2, { message: "Enter full name of company" }),
    logo: z.string(),
    designation: z.string(),
    userId: z.string(),
    works: z.string(),
    link: z.string(),
    dates: z.string(),
});

export const createExperience = async (formData: FormData) => {
    const validatedFields = ExperienceSchema.safeParse({
        company: formData.get("company"),
        logo: formData.get("logo"),
        designation: formData.get("designation"),
        userId: formData.get("userId"),
        works: formData.get("works"),
        link: formData.get("link"),
        dates: formData.get("dates"),
    });
    console.log(validatedFields.error);

    if (validatedFields.success) {
        const works = validatedFields.data.works.split(",");
        const experience = {
            company: validatedFields.data.company,
            logo: validatedFields.data.logo,
            designation: validatedFields.data.designation,
            userId: validatedFields.data.userId,
            works: works,
            link: validatedFields.data.link,
            dates: validatedFields.data.dates,
        };
        const res = await fetch(
            "https://kawshikbss.github.io/api/settings/experience/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(experience),
            }
        );
        if (res.status === 200) revalidatePath("/admin/user-settings");
    }
};

export const deleteExperience = async (id: any) => {
    const client = await clientPromise;
    const database = client.db("portfolio-cms");
    const collection = database.collection("experience");
    const experienceId = new ObjectId(id);
    try {
        await collection.deleteOne({ _id: experienceId });
    } catch (error) {
        console.error(error);
    }
    revalidatePath("/admin/user-settings");
};
