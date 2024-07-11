import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Arrondissement } from "./Arrondissement";

@Entity({ name: "villes" })
export class Ville {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Arrondissement, (arrondissement) => arrondissement.ville)
  arrondissements: Arrondissement[];
}