import { SkillInterface } from "@/app/lib/defenitions";
import clientPromise from "@/app/lib/mongo";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";

type ResponseData = {
    skills?: SkillInterface[];
    skill?: SkillInterface;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const client = await clientPromise;
    const database = client.db("portfolio-cms");
    const collection = database.collection("skill");
    if (req.method === "GET") {
        const { userId } = req.query;
        if (userId === "0") {
            res.json({ data: [], message: "Skills Fetched" });
        }
        try {
            const skills = await collection.find({ userId: userId }).toArray();
            res.json({ data: skills, message: "Skills Fetched" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Something went wrong!" });
        }
    } else if (req.method === "POST") {
        const skill = req?.body;

        try {
            const newSkill = await collection.insertOne(skill);
            console.log(newSkill);

            res.json({ newSkill, message: "Skill Created" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Something went wrong!" });
        }
    }
}
