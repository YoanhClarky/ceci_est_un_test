import {
  ArrondissementModelRepository,
  VilleModelRepository,
} from "../config/data-source";
import { Arrondissement } from "../entity/Arrondissement";

export const getAllArrondissementsService = async () => {
  const arrondissements = await ArrondissementModelRepository.find();
  return arrondissements;
};
interface createArrondissementDto {
  name: string;
  ville_id: number;
}
export const createArrondissementService = async (
  arrondissement: createArrondissementDto
): Promise<Arrondissement> => {
  const { name, ville_id } = arrondissement;

  const ville = await VilleModelRepository.findOne({ where: { id: ville_id } });
  if (!ville) {
    throw new Error("Cette ville n'existe pas");
  }

  const newArron = ArrondissementModelRepository.create({ name, ville });
  const savedArron = await ArrondissementModelRepository.save(newArron);

  return savedArron;
};

export const updateArrondissementService = async (
  id: number,
  arrondissement: createArrondissementDto
) => {
  const { name, ville_id } = arrondissement;

  const _arrondissement = await ArrondissementModelRepository.findOneBy({ id });
  if (!_arrondissement) {
    throw new Error("Arrondissement no trouvé");
  }

  const ville = await VilleModelRepository.findOne({ where: { id: ville_id } });
  if (!ville) {
    throw new Error("Ville non trouvée");
  }

  _arrondissement.name = name;
  _arrondissement.ville = ville;

  await ArrondissementModelRepository.save(_arrondissement);
  return _arrondissement;
};

export const deleteArrondissementService = async (id: number) => {
  const _arrondissement = await ArrondissementModelRepository.findOneBy({ id });
  await ArrondissementModelRepository.delete(_arrondissement);
};
