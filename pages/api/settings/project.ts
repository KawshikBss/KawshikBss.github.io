import { ProjectInterface, SkillInterface } from "@/app/lib/defenitions";
import clientPromise from "@/app/lib/mongo";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";

type ResponseData = {
    skills?: ProjectInterface[];
    skill?: ProjectInterface;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const client = await clientPromise;
    const database = client.db("portfolio-cms");
    const collection = database.collection("project");
    if (req.method === "GET") {
        const { userId } = req.query;
        if (userId === "0") {
            res.json({ data: [], message: "Projects Fetched" });
        }
        try {
            const projects = await collection
                .find({ userId: userId })
                .toArray();
            res.json({ data: projects, message: "Projects Fetched" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Something went wrong!" });
        }
    } else if (req.method === "POST") {
        const project = req?.body;

        try {
            const newProject = await collection.insertOne(project);
            console.log(newProject);

            res.json({ newProject, message: "Project Created" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Something went wrong!" });
        }
    }
}
