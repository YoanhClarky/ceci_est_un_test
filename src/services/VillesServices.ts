import { Request, Response } from "express";
import { VilleModelRepository } from "../config/data-source";
import { Ville } from "../entity/Ville";

export const getAllVillesService = async () => {
  const villes = await VilleModelRepository.find();
  return villes;
};
interface createVilleDto {
  name: string;
}
export const createVilleService = async (
  ville: createVilleDto
): Promise<Ville> => {
  const { name } = ville;
  const newVille = VilleModelRepository.create({ name });
  const savedVille = await VilleModelRepository.save(newVille);
  return savedVille;
};

export const updateVilleService = async (id: number, ville: createVilleDto) => {
  const { name } = ville;
  const _ville = await VilleModelRepository.findOneBy({ id });
  _ville.name = ville.name;
  await VilleModelRepository.save(_ville);
  return _ville;
};

export const deleteVilleService = async (id: number) => {
  const _ville = await VilleModelRepository.findOneBy({ id });
  await VilleModelRepository.delete(_ville);
};

export const ShowVilleService = async (id: number) => {
  const _ville = await VilleModelRepository.findOneBy({ id });
  return _ville;
};
