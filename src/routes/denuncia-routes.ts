import express from "express";
import { criarDenuncia, listarDenuncias, filtrarPorCategoria } from "../controllers/denuncia-controller";

const router = express.Router();

router.post("/denuncias", criarDenuncia);
router.get("/denuncias", listarDenuncias);
router.get("/denuncias/filtro", filtrarPorCategoria);

export default router;