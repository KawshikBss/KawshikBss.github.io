"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import clientPromise from "../mongo";
import { ObjectId } from "mongodb";

const SkillsSchema = z.object({
    name: z.string().min(2, { message: "Enter full name of skill" }),
    icon: z.string().min(2, { message: "Enter an icon" }),
    userId: z.string(),
});

export const createSkill = async (formData: FormData) => {
    const validatedFields = SkillsSchema.safeParse({
        name: formData.get("name"),
        icon: formData.get("icon"),
        userId: formData.get("userId"),
    });
    if (validatedFields.success) {
        const skill = {
            name: validatedFields.data.name,
            icon: validatedFields.data.icon,
            userId: validatedFields.data.userId,
        };
        const res = await fetch(
            "http://localhost:3000/api/settings/skill/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(skill),
            }
        );
        if (res.status === 200) revalidatePath("/admin/user-settings");
    }
};

export const deleteSkill = async (id: any) => {
    const client = await clientPromise;
    const database = client.db("portfolio-cms");
    const collection = database.collection("skill");
    console.log(id);
    const skillId = new ObjectId(id);
    try {
        await collection.deleteOne({ _id: skillId });
    } catch (error) {
        console.error(error);
    }
    revalidatePath("/admin/user-settings");
};
