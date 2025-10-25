import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectMongo } from "./database/connectMongo"; 
import denunciaRoutes from "./routes/denuncia-routes";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/", denunciaRoutes); 

const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
  await connectMongo(); 
  console.log(`Servidor rodando na porta ${PORT}`);
});