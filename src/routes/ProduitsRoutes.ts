import { Router } from "express";
import { createProduitController, deleteProduitController, getAllProduitController, updateProduitController } from "../controllers/ProduitController";

const ProduitsRoutes = Router();
ProduitsRoutes.get("/",getAllProduitController)
ProduitsRoutes.post("/",createProduitController)
ProduitsRoutes.put("/",updateProduitController)
ProduitsRoutes.delete("/",deleteProduitController)
export default ProduitsRoutes