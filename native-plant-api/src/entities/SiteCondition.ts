/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
} from "typeorm";
import Plant from "./Plant";

@Entity()
export default class SiteCondition {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  name!: string;

  @ManyToMany(
    (type) => Plant,
    (plant) => plant.siteConditions,
    { nullable: false, onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  plants!: Plant[];
}
