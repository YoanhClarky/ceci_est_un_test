import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Arrondissement } from "./Arrondissement";
import { User } from "./User";

@Entity({ name: "quartiers" })
export class Quartier {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;

  @ManyToOne(() => Arrondissement, (arrondissement) => arrondissement.quartiers)
  @JoinColumn({ name: "arrondissement_id" })
  arrondissement: Arrondissement;

  @OneToMany(() => User, (user) => user.quartier)
  users: User[];
}
