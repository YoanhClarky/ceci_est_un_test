import { Request, Response } from "express";
import {
  createQuartierService,
  deleteQuartierService,
  getAllQuartiersService,
  updateQuartierService,
} from "../services/QuartiersServices";

export const getAllQuartiersController = async (
  req: Request,
  res: Response
) => {
  const quartiers = await getAllQuartiersService();
  res.json(quartiers);
};

export const createQuartierController = async (req: Request, res: Response) => {
  const quartier = req.body;
  const newQuartier = await createQuartierService(quartier);
  res.json(newQuartier);
};

export const updateQuartierController = async (req: Request, res: Response) => {
  try {
    const { name, id, arrondissement_id } = req.body;
    const updatedQuartier = await updateQuartierService(id, {
      name,
      arrondissement_id,
    });
    res.json(updatedQuartier);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteQuartierController = async (req: Request, res: Response) => {
  const { id } = req.body;
  const deleteQuartier = await deleteQuartierService(id);
  res.json(deleteQuartier);
};


