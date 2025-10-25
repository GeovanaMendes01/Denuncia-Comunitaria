import mongoose from "mongoose";
import "dotenv/config";

const mongoUri = process.env.MONGO_URI as string;

export async function connectMongo(): Promise<void> {
  try {
    await mongoose.connect(mongoUri);
    console.log("Banco de dados conectado com sucesso!");
  } catch (error) {
    console.error("Erro ao conectar banco de dados:", error);
    process.exit(1);
  }
}