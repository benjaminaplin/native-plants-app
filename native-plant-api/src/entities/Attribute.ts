/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
} from "typeorm";

import Plant from "./Plant";

@Entity()
export default class Attribute {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({unique: true})
  name!: string;

  @ManyToMany(
    (type) => Plant,
    (plant) => plant.attributes,
    { nullable: false, onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  plants!: Plant[];
}
