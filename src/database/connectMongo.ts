import mongoose from 'mongoose';
import 'dotenv/config';

const mongoUri = process.env.MONGO_URI as string;

const clientOptions = { serverApi: { version: '1' as const, strict: true, deprecationErrors: true } };
export async function run() {
    try {
        await mongoose.connect(mongoUri, clientOptions);
        if (mongoose.connection.db) {
            await mongoose.connection.db.admin().command({ ping: 1 });
            console.log("You successfully connected to MongoDB!");
        }
    } finally {
        await mongoose.disconnect();
    }
}
run().catch(console.dir);
