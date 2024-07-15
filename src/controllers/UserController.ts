import {Request, Response} from "express";
import {User} from "../entity/User";
import {CreateUserDto} from "../dtos/create-user.dto";

class UserController {
    /**
     * Récupère tous les utilisateurs.
     */
    static getAll = async (req: Request, res: Response) => {
        try {
            // Récupération de tous les utilisateurs de la base de données.
            const users = await User.find();
            return res.status(200).json({success: true, data: users});
        } catch (error) {
            // Gestion des erreurs de manière élégante et fourniture de réponses significatives.
            // Utilisation de codes d'état HTTP pour indiquer la nature de l'erreur.
            const [code, message] = error.message.split('|');
            const isValid = isFinite(code);
            return res
                .status(isValid ? +code : 500)
                .json({success: false, message: message || error.message});
        }
    };


    /**
     * Crée un nouvel utilisateur.
     */
    static create = async (req: Request, res: Response) => {
        try {
            const data = req.body as CreateUserDto;

            // Création de l'utilisateur avec des données et activation conditionnelles.
            const user = User.create({...data})
            await user.save();

            return res.status(201).json({
                success: true,
                data:user,
            });
        } catch (error) {
            const [code, message] = error.message.split('|');
            const isValid = isFinite(code);
            return res
                .status(isValid ? +code : 500)
                .json({success: false, message: message || error.message});
        }
    };

}

export default UserController;
