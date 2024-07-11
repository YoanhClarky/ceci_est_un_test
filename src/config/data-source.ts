import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entity/User";
import { Produit } from "../entity/Produit";
import { Ville } from "../entity/Ville";
import { Arrondissement } from "../entity/Arrondissement";
import { Quartier } from "../entity/Quartier";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "soutenance",
  synchronize: true,
  logging: false,
  entities: [Produit, Ville, Arrondissement, Quartier, User],
  migrations: [],
  subscribers: [],
  dropSchema: false,
});

export const ProduitModelRepository = AppDataSource.getRepository(Produit);
export const VilleModelRepository = AppDataSource.getRepository(Ville);
export const QuartierModelRepository = AppDataSource.getRepository(Quartier);
export const UserModelRepository = AppDataSource.getRepository(User);
export const ArrondissementModelRepository =
  AppDataSource.getRepository(Arrondissement);
