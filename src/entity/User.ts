import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { Quartier } from "./Quartier";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column()
  age: number;

  @ManyToOne(() => Quartier, (quartier) => quartier.users)
  @JoinColumn({ name: "quartier_id" })
  quartier: Quartier;
}
