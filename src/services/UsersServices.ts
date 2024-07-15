import {
  QuartierModelRepository,
  UserModelRepository,
} from "../config/data-source";
import { Quartier } from "../entity/Quartier";
import { User } from "../entity/User";

export const getAllUsersService = async () => {
  const users = await UserModelRepository.find();
  return users;
};

interface createUserDto {
  nom: string;
  prenom: string;
  age: number;
  quartier_id: number;
}

export const createUserService = async (user: createUserDto): Promise<User> => {
  const { nom, prenom, age, quartier_id } = user;
  const quartier = await QuartierModelRepository.findOne({
    where: { id: quartier_id },
  });
  if (!quartier) {
    throw new Error("Ce quartier n'existe pas");
  }
  const newUser = UserModelRepository.create({ nom, prenom, age, quartier });
  const savedUser = await UserModelRepository.save(newUser);
  return savedUser;
};

export const updateUserService = async (id: number, user: createUserDto) => {
  const { nom, prenom, age, quartier_id } = user;
  const _user = await UserModelRepository.findOneBy({ id });
  if (!_user) {
    throw new Error("User non trouvé");
  }
  const quartier = await QuartierModelRepository.findOne({
    where: { id: quartier_id },
  });
  if (!quartier) {
    throw new Error("Quartier non trouvé");
  }
  _user.nom = nom;
  _user.prenom = prenom;
  _user.age = age;
  _user.quartier = quartier;
  await UserModelRepository.save(_user);
  return _user;
};

export const deleteUserService = async (id: number) => {
  const _user = await UserModelRepository.findOneBy({ id });
  await UserModelRepository.delete(_user);
};

export const ShowUserService = async (id: number) => {
  const _user = await UserModelRepository.findOne({
    where: { id },
    relations: ["quartier", "quartier.arrondissement"],
  });
  return _user;
};

export const UsersQuartierService = async (
  quartier_id: number
): Promise<User[]> => {
  const users = await UserModelRepository.find({
    where: { quartier: { id: quartier_id } },
    relations: ["quartier", "quartier.arrondissement"],
  });
  return users;
};
