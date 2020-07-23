import {MigrationInterface, QueryRunner} from "typeorm";

export class updatePlantTable1593708988476 implements MigrationInterface {
    name = 'updatePlantTable1593708988476'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "plant_plant_placement_order_enum" AS ENUM('primary', 'secondary', 'tertiary')`);
        await queryRunner.query(`ALTER TABLE "plant" ADD "plant_placement_order" "plant_plant_placement_order_enum" NOT NULL`);
        await queryRunner.query(`ALTER TYPE "public"."plant_light_requirements_enum" RENAME TO "plant_light_requirements_enum_old"`);
        await queryRunner.query(`CREATE TYPE "plant_light_requirements_enum" AS ENUM('low', 'medium', 'high')`);
        await queryRunner.query(`ALTER TABLE "plant" ALTER COLUMN "light_requirements" TYPE "plant_light_requirements_enum" USING "light_requirements"::"text"::"plant_light_requirements_enum"`);
        await queryRunner.query(`DROP TYPE "plant_light_requirements_enum_old"`);
        await queryRunner.query(`ALTER TYPE "public"."plant_growing_seasonality_enum" RENAME TO "plant_growing_seasonality_enum_old"`);
        await queryRunner.query(`CREATE TYPE "plant_growing_seasonality_enum" AS ENUM('perennial', 'annual', 'biennial', 'deciduous')`);
        await queryRunner.query(`ALTER TABLE "plant" ALTER COLUMN "growing_seasonality" TYPE "plant_growing_seasonality_enum" USING "growing_seasonality"::"text"::"plant_growing_seasonality_enum"`);
        await queryRunner.query(`DROP TYPE "plant_growing_seasonality_enum_old"`);
        await queryRunner.query(`ALTER TYPE "public"."plant_plant_type_enum" RENAME TO "plant_plant_type_enum_old"`);
        await queryRunner.query(`CREATE TYPE "plant_plant_type_enum" AS ENUM('shrub', 'tree', 'groundCover', 'vine')`);
        await queryRunner.query(`ALTER TABLE "plant" ALTER COLUMN "plant_type" TYPE "plant_plant_type_enum" USING "plant_type"::"text"::"plant_plant_type_enum"`);
        await queryRunner.query(`DROP TYPE "plant_plant_type_enum_old"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "plant_plant_type_enum_old" AS ENUM('Shrub', 'Tree', 'GroundCover', 'Vine')`);
        await queryRunner.query(`ALTER TABLE "plant" ALTER COLUMN "plant_type" TYPE "plant_plant_type_enum_old" USING "plant_type"::"text"::"plant_plant_type_enum_old"`);
        await queryRunner.query(`DROP TYPE "plant_plant_type_enum"`);
        await queryRunner.query(`ALTER TYPE "plant_plant_type_enum_old" RENAME TO  "plant_plant_type_enum"`);
        await queryRunner.query(`CREATE TYPE "plant_growing_seasonality_enum_old" AS ENUM('Perennial', 'Annual', 'Biennial', 'Deciduous')`);
        await queryRunner.query(`ALTER TABLE "plant" ALTER COLUMN "growing_seasonality" TYPE "plant_growing_seasonality_enum_old" USING "growing_seasonality"::"text"::"plant_growing_seasonality_enum_old"`);
        await queryRunner.query(`DROP TYPE "plant_growing_seasonality_enum"`);
        await queryRunner.query(`ALTER TYPE "plant_growing_seasonality_enum_old" RENAME TO  "plant_growing_seasonality_enum"`);
        await queryRunner.query(`CREATE TYPE "plant_light_requirements_enum_old" AS ENUM('Low', 'Medium', 'High')`);
        await queryRunner.query(`ALTER TABLE "plant" ALTER COLUMN "light_requirements" TYPE "plant_light_requirements_enum_old" USING "light_requirements"::"text"::"plant_light_requirements_enum_old"`);
        await queryRunner.query(`DROP TYPE "plant_light_requirements_enum"`);
        await queryRunner.query(`ALTER TYPE "plant_light_requirements_enum_old" RENAME TO  "plant_light_requirements_enum"`);
        await queryRunner.query(`ALTER TABLE "plant" DROP COLUMN "plant_placement_order"`);
        await queryRunner.query(`DROP TYPE "plant_plant_placement_order_enum"`);
    }

}
