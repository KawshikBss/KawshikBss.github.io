import clientPromise from "../../../app/lib/mongo";
import type { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb";

type ResponseData = {
    message: string;
    user?: any | null;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    const client = await clientPromise;
    const database = client.db("portfolio-cms");
    const collection = database.collection("user");

    if (req.method === "POST") {
        const user = req.body;

        try {
            const newUser = await collection.insertOne(user);
            res.status(200).json({
                message: "User Data Created",
                user: newUser,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Something went wrong!" });
        }
    } else if (req.method === "PUT") {
        const user = req.body;

        try {
            const userId = user._id;

            const updatedUser = await collection.updateOne(
                { _id: userId },
                {
                    $set: {
                        first_name: user.first_name,
                        last_name: user.last_name,
                        designation: user.designation,
                        profile_image: user.profile_image,
                        short_bio: user.short_bio,
                        full_bio: user.full_bio,
                    },
                },
                { upsert: true }
            );

            if (updatedUser) {
                res.status(200).json({
                    message: "User Data Updated",
                    user: updatedUser,
                });
            }
        } catch (error) {
            console.error(error);

            res.status(500).json({ message: "Something went wrong!" });
        }
    } else if (req.method === "GET") {
        const { id } = req.query;
        if (typeof id !== "string" || !ObjectId.isValid(id)) {
            res.status(400).json({ message: "Invalid ID format" });
            return;
        }
        try {
            const user = await collection.findOne({ _id: new ObjectId(id) });
            console.log(user);

            res.json({
                message: "User Fetched",
                user: user,
            });
        } catch (error) {
            console.error(error);

            res.status(500).json({ message: "Something went wrong!" });
        }
    } else {
        res.status(405).json({ message: "Method not allowed!" });
    }
}
