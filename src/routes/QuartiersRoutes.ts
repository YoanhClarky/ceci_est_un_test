import { Router } from "express";
import {
  createQuartierController,
  deleteQuartierController,
  getAllQuartiersController,
  updateQuartierController,
} from "../controllers/QuartiersController";

const QuartierRoutes = Router();

QuartierRoutes.get("/", getAllQuartiersController);
QuartierRoutes.post("/", createQuartierController);
QuartierRoutes.put("/", updateQuartierController);
QuartierRoutes.delete("/", deleteQuartierController);

export default QuartierRoutes;
