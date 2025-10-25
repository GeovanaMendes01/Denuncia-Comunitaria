import { Request, Response } from "express";
import Denuncia from "../models/denuncia-model";

export async function criarDenuncia(req: Request, res: Response) {
  try {
    const novaDenuncia = await Denuncia.create(req.body);
    return res.status(201).json(novaDenuncia);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao criar denúncia" });
  }
}

export async function listarDenuncias(req: Request, res: Response) {
  try {
    const denuncias = await Denuncia.find();
    return res.status(200).json(denuncias);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar denúncias" });
  }
}

export async function filtrarPorCategoria(req: Request, res: Response) {
  try {
    const { categoria } = req.query;
    const denuncias = await Denuncia.find({ categoria });
    return res.status(200).json(denuncias);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao filtrar denúncias" });
  }
}