import { ProduitModelRepository } from "../config/data-source";
import { Produit } from "../entity/Produit";

export const getAllProduitsService = async () => {
  const produits = await ProduitModelRepository.find();
  return produits;
};

interface createProduitDto {
  name: string;
  prix: number;
  categorie: string;
}

export const createProduitService = async (
  produit: createProduitDto
): Promise<Produit> => {
  const { name, prix, categorie } = produit;
  const newProduit = ProduitModelRepository.create({ name, prix, categorie });
  const savedProduit = await ProduitModelRepository.save(newProduit);
  return savedProduit;
};

export const updateProduitService = async (
  id: number,
  produit: createProduitDto
) => {
  const { name, prix, categorie } = produit;
  const prdt = await ProduitModelRepository.findOneBy({ id });
  prdt.name = produit.name;
  prdt.prix = produit.prix;
  prdt.categorie = produit.categorie;
  await ProduitModelRepository.save(prdt);
  return prdt;
};

export const deleteProduitService = async (id: number) => {
  const prdt = await ProduitModelRepository.findOneBy({ id });
  await ProduitModelRepository.delete(prdt);
};
