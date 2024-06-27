import { MongoClient, ServerApiVersion } from "mongodb";

const uri =
    "mongodb+srv://kawshikbss:zilch1001@cluster0.b3jx8bi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const options = {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
};

let client;
let clientPromise: Promise<MongoClient>;

client = new MongoClient(uri, options);
clientPromise = client.connect();

export default clientPromise;
