import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne, BaseEntity,
} from "typeorm";
import { Quartier } from "./Quartier";

@Entity()
export class User extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column()
  email: string;

  @Column()
  prenom: string;

  @Column()
  age: number;

  @ManyToOne(() => Quartier, (quartier) => quartier.users)
  @JoinColumn({ name: "quartier_id" })
  quartier: Quartier;
}
