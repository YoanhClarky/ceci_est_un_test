import { Router } from "express";
import {
  CreateVilleController,
  deleteVilleController,
  getAllVilleController,
  showVilleController,
  updateVilleController,
} from "../controllers/VillesController";

const VillesRoutes = Router();
VillesRoutes.get("/", getAllVilleController);
VillesRoutes.post("/", CreateVilleController);
VillesRoutes.put("/", updateVilleController);
VillesRoutes.delete("/", deleteVilleController);
VillesRoutes.get("/show/:id", showVilleController);
export default VillesRoutes;
