import { Router } from "express";
import {
  createArrondissementController,
  deleteArrondissementController,
  getAllArrondissementController,
  updateArrondissementController,
} from "../controllers/ArrondissementsController";

const ArrondissementsRoutes = Router();

ArrondissementsRoutes.get("/", getAllArrondissementController);
ArrondissementsRoutes.post("/", createArrondissementController);
ArrondissementsRoutes.put("/", updateArrondissementController);
ArrondissementsRoutes.delete("/", deleteArrondissementController);

export default ArrondissementsRoutes;
