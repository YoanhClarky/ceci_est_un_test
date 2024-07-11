import { Request, Response } from "express";
import {
  createUserService,
  deleteUserService,
  getAllUsersService,
  ShowUserService,
  updateUserService,
  UsersQuartierService,
} from "../services/UsersServices";
import { UserModelRepository } from "../config/data-source";

export const getAllUsersController = async (req: Request, res: Response) => {
  const users = await getAllUsersService();
  res.json(users);
};

export const CreateUserController = async (req: Request, res: Response) => {
  const user = req.body;
  const newUser = await createUserService(user);
  res.json(newUser);
};

export const updateUserController = async (req: Request, res: Response) => {
  const { nom, prenom, age, id, quartier_id } = req.body;
  const updateUser = await updateUserService(id, {
    nom,
    prenom,
    age,
    quartier_id,
  });
  res.json(updateUser);
};

export const deleteUserController = async (req: Request, res: Response) => {
  const { id } = req.body;
  const deleteUser = await deleteUserService(id);
  res.json(deleteUser);
};

export const showUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await ShowUserService(parseInt(id));

    if (!user) {
      return res.status(404).json({ message: "User non trouvé" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const UsersQuartierController = async (req: Request, res: Response) => {
  try {
    const { quartier_id } = req.params;
    const users = await UsersQuartierService(parseInt(quartier_id));

    if (!users.length) {
      return res
        .status(404)
        .json({ message: "Aucun user trouvé pour ce quartier" });
    }

    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
