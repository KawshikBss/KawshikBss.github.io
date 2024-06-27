"use server";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import clientPromise from "../mongo";
import { ObjectId } from "mongodb";

const ProjectsSchema = z.object({
    name: z.string().min(2, { message: "Enter full name of project" }),
    thumbnail: z.string().min(2, { message: "Enter full name of project" }),
    description: z.string().min(2, { message: "Enter full name of project" }),
    userId: z.string(),
    techs: z.string(),
    link: z.string(),
});

export const createProject = async (formData: FormData) => {
    const validatedFields = ProjectsSchema.safeParse({
        name: formData.get("name"),
        thumbnail: formData.get("thumbnail"),
        description: formData.get("description"),
        userId: formData.get("userId"),
        techs: formData.get("techs"),
        link: formData.get("link"),
    });

    if (validatedFields.success) {
        const techs = validatedFields.data.techs.split(",");
        const project = {
            name: validatedFields.data.name,
            thumbnail: validatedFields.data.thumbnail,
            description: validatedFields.data.description,
            userId: validatedFields.data.userId,
            techs: techs,
            link: validatedFields.data.link,
        };
        const res = await fetch(
            "http://localhost:3000/api/settings/project/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(project),
            }
        );
        if (res.status === 200) revalidatePath("/admin/user-settings");
    }
};

export const deleteProject = async (id: any) => {
    const client = await clientPromise;
    const database = client.db("portfolio-cms");
    const collection = database.collection("project");
    const projectId = new ObjectId(id);
    try {
        await collection.deleteOne({ _id: projectId });
    } catch (error) {
        console.error(error);
    }
    revalidatePath("/admin/user-settings");
};
