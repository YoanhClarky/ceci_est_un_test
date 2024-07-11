import { Router } from "express";
import {
  CreateUserController,
  deleteUserController,
  getAllUsersController,
  showUserController,
  updateUserController,
  UsersQuartierController,
} from "../controllers/UsersControllers";

const UsersRoutes = Router();

UsersRoutes.get("/", getAllUsersController);
UsersRoutes.get("/show/:id", showUserController);
UsersRoutes.post("/", CreateUserController);
UsersRoutes.put("/", updateUserController);
UsersRoutes.delete("/", deleteUserController);
UsersRoutes.get("/quartier/:quartier_id", UsersQuartierController);
export default UsersRoutes;
