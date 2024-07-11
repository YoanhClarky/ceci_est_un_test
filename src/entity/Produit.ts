import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "produits"})

export class Produit{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    prix: number

    @Column()
    categorie: string

}