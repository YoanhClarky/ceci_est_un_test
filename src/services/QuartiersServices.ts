import {
  ArrondissementModelRepository,
  QuartierModelRepository,
} from "../config/data-source";
import { Quartier } from "../entity/Quartier";

export const getAllQuartiersService = async () => {
  const quartiers = await QuartierModelRepository.find();
  return quartiers;
};

interface createQuartierDto {
  name: string;
  arrondissement_id: number;
}
export const createQuartierService = async (
  quartier: createQuartierDto
): Promise<Quartier> => {
  const { name, arrondissement_id } = quartier;
  const arrondissement = await ArrondissementModelRepository.findOne({
    where: { id: arrondissement_id },
  });
  if (!arrondissement) {
    throw new Error("Cet arrondissement n'existe pas");
  }
  const newQuartier = QuartierModelRepository.create({ name, arrondissement });
  const savedQuartier = await QuartierModelRepository.save(newQuartier);
  return savedQuartier;
};

export const updateQuartierService = async (
  id: number,
  quartier: createQuartierDto
) => {
  const { name, arrondissement_id } = quartier;

  const _quartier = await QuartierModelRepository.findOneBy({ id });
  if (!_quartier) {
    throw new Error("Quartier non trouvé");
  }

  const arrondissement = await ArrondissementModelRepository.findOne({
    where: { id: arrondissement_id },
  });
  if (!arrondissement) {
    throw new Error("Arrondissement non trouvé");
  }

  _quartier.name = name;
  _quartier.arrondissement = arrondissement;

  await QuartierModelRepository.save(_quartier);
  return _quartier;
};

export const deleteQuartierService = async (id: number) => {
  const _quartier = await QuartierModelRepository.findOneBy({ id });
  await QuartierModelRepository.delete(_quartier);
};
