import {Router} from "express";
import {
    CreateUserController,
    deleteUserController,
    getAllUsersController,
    showUserController,
    updateUserController,
    UsersQuartierController,
} from "../controllers/UsersControllers";
import {validateBody} from "../middlewares/validateBody";
import {CreateUserDto} from "../dtos/create-user.dto";
import UserController from "../controllers/UserController";

const UsersRoutes = Router();

UsersRoutes.get("/", getAllUsersController);
UsersRoutes.get("/show/:id", showUserController);
UsersRoutes.post("/", CreateUserController);
UsersRoutes.put("/", updateUserController);
UsersRoutes.delete("/", deleteUserController);
UsersRoutes.get("/quartier/:quartier_id", UsersQuartierController);

// Route ajoutées
UsersRoutes.post('/create', validateBody(CreateUserDto), UserController.create)

export default UsersRoutes;
