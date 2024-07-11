import { Request, Response } from "express";
import {
  createVilleService,
  deleteVilleService,
  getAllVillesService,
  ShowVilleService,
  updateVilleService,
} from "../services/VillesServices";
import { VilleModelRepository } from "../config/data-source";

export const getAllVilleController = async (req: Request, res: Response) => {
  const villes = await getAllVillesService();
  res.json(villes);
};

export const CreateVilleController = async (req: Request, res: Response) => {
  const ville = req.body;
  const newville = await createVilleService(ville);
  res.json(newville);
};

export const updateVilleController = async (req: Request, res: Response) => {
  const { name, id } = req.body;
  const updateVille = await updateVilleService(id, {
    name,
  });
  res.json(updateVille);
};

export const deleteVilleController = async (req: Request, res: Response) => {
  const { id } = req.body;
  const deleteVille = await deleteVilleService(id);
  res.json(deleteVille);
};

export const showVilleController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const ville = await VilleModelRepository.findOne({
      where: { id: parseInt(id) },
    });

    if (!ville) {
      return res.status(404).json({ message: "Ville non trouvée" });
    }

    res.json(ville);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
