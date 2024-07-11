import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Ville } from "./Ville";
import { Quartier } from "./Quartier";

@Entity({ name: "arrondissements" })
export class Arrondissement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Ville, (ville) => ville.arrondissements)
  @JoinColumn({ name: "ville_id" })
  ville: Ville;

  @OneToMany(() => Quartier, (quartier) => quartier.arrondissement)
  quartiers: Quartier[];
}
