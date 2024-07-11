import { Request, Response } from "express";
import { createProduitService, deleteProduitService, getAllProduitsService, updateProduitService } from "../services/ProduitsServices";

export const getAllProduitController = async (req: Request, res: Response) => {
  const produits = await getAllProduitsService();
  res.json(produits);
};

export const createProduitController = async (req: Request, res: Response) => {
    const produit = req.body
    const newProduit = await createProduitService(produit);
    res.json(newProduit);
  };

  export const updateProduitController = async (req: Request, res: Response) => {
    const {name, prix, categorie, id} = req.body
    const updateProduit = await updateProduitService(id, {name, prix, categorie})
    res.json(updateProduit)
  };

  export const deleteProduitController = async (req: Request, res: Response) => {
    const {id} = req.body
    const deleteProduit = await deleteProduitService(id)
    res.json(deleteProduit)
  };

