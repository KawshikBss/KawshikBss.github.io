import { ExperienceInterface } from "@/app/lib/defenitions";
import clientPromise from "@/app/lib/mongo";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";

type ResponseData = {
    skills?: ExperienceInterface[];
    skill?: ExperienceInterface;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const client = await clientPromise;
    const database = client.db("portfolio-cms");
    const collection = database.collection("experience");
    if (req.method === "GET") {
        const { userId } = req.query;
        if (userId === "0") {
            res.json({ data: [], message: "Expreiences Fetched" });
        }
        try {
            const expreiences = await collection
                .find({ userId: userId })
                .toArray();
            res.json({ data: expreiences, message: "Expreiences Fetched" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Something went wrong!" });
        }
    } else if (req.method === "POST") {
        const expreience = req?.body;

        try {
            const newExpreience = await collection.insertOne(expreience);
            res.json({ newExpreience, message: "Expreience Created" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Something went wrong!" });
        }
    }
}
