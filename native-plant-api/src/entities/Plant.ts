/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinTable, ManyToMany } from "typeorm";
import Attribute from './Attribute'
import SiteCondition from './SiteCondition'

enum LightRequirements {
  FullSun ="full_sun",
  FullSunToPartShade ="full_sun_to_part_shade",
  PartShade = "part_shade",
  PartShadeToFullShade ="part_shade_to_full_shade",
  FullShade = "full_shade"
}
enum PlantTypes {
  Shrub= "shrub",
  Tree= "tree",
  GroundCover= "groundCover",
  Vin= "vine"
}
enum GrowingSeasonality {
  Perennial = "perennial",
  Annual = "annual",
  Biennial = "biennial",
  Deciduous = "deciduous",
  Evergreen = "evergreen"
}

enum PlantPlacementOrder {
  Primary = "primary",
  Secondary = "secondary",
  Tertiary = "tertiary",
}

@Entity()
export default class Plant {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  botanical_name!: string;

  @Column()
  friendly_name!: string;

  @Column({ type: "enum", enum: LightRequirements })
  light_requirements!: string;

  @Column({ type: "enum", enum: GrowingSeasonality })
  growing_seasonality!: string;

  @Column({ type: "enum", enum: PlantTypes })
  plant_type!: string;

  @Column({ type: "enum", enum: PlantPlacementOrder })
  plant_placement_order!: string;

  @ManyToMany(
    (type) => Attribute,
    (attribute) => attribute.plants,
    { nullable: true, onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinTable()
  attributes!: Attribute[];

  @ManyToMany(
    (type) => SiteCondition,
    (siteCondition) => siteCondition.plants,
    { nullable: true, onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinTable()
  siteConditions!: SiteCondition[];
}
