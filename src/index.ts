import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { run } from "./database/connectMongo";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(run)

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("API de Denúncia Comunitária funcionando!");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});