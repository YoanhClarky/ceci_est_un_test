import { Request, Response } from "express";
import {
  createArrondissementService,
  deleteArrondissementService,
  getAllArrondissementsService,
  updateArrondissementService,
} from "../services/ArrondissementsServices";

export const getAllArrondissementController = async (
  req: Request,
  res: Response
) => {
  const arrondissements = await getAllArrondissementsService();
  res.json(arrondissements);
};

export const createArrondissementController = async (
  req: Request,
  res: Response
) => {
  try {
    const arrondissement = req.body;
    const newArron = await createArrondissementService(arrondissement);
    res.json(newArron);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateArrondissementController = async (
  req: Request,
  res: Response
) => {
  try {
    const { name, id, ville_id } = req.body;
    const updatedArron = await updateArrondissementService(id, {
      name,
      ville_id,
    });
    res.json(updatedArron);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteArrondissementController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.body;
  const deleteArron = await deleteArrondissementService(id);
  res.json(deleteArron);
};


export class ArrondissementController {

   static create = async(req, res)=>{
      
   }
} 