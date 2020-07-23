import {MigrationInterface, QueryRunner} from "typeorm";

export class updateLightEnum1593710673159 implements MigrationInterface {
    name = 'updateLightEnum1593710673159'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TYPE "public"."plant_light_requirements_enum" RENAME TO "plant_light_requirements_enum_old"`);
        await queryRunner.query(`CREATE TYPE "plant_light_requirements_enum" AS ENUM('full_sun', 'part_shade', 'full_shade')`);
        await queryRunner.query(`ALTER TABLE "plant" ALTER COLUMN "light_requirements" TYPE "plant_light_requirements_enum" USING "light_requirements"::"text"::"plant_light_requirements_enum"`);
        await queryRunner.query(`DROP TYPE "plant_light_requirements_enum_old"`);
        await queryRunner.query(`ALTER TYPE "public"."plant_growing_seasonality_enum" RENAME TO "plant_growing_seasonality_enum_old"`);
        await queryRunner.query(`CREATE TYPE "plant_growing_seasonality_enum" AS ENUM('perennial', 'annual', 'biennial', 'deciduous', 'evergreen')`);
        await queryRunner.query(`ALTER TABLE "plant" ALTER COLUMN "growing_seasonality" TYPE "plant_growing_seasonality_enum" USING "growing_seasonality"::"text"::"plant_growing_seasonality_enum"`);
        await queryRunner.query(`DROP TYPE "plant_growing_seasonality_enum_old"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "plant_growing_seasonality_enum_old" AS ENUM('perennial', 'annual', 'biennial', 'deciduous')`);
        await queryRunner.query(`ALTER TABLE "plant" ALTER COLUMN "growing_seasonality" TYPE "plant_growing_seasonality_enum_old" USING "growing_seasonality"::"text"::"plant_growing_seasonality_enum_old"`);
        await queryRunner.query(`DROP TYPE "plant_growing_seasonality_enum"`);
        await queryRunner.query(`ALTER TYPE "plant_growing_seasonality_enum_old" RENAME TO  "plant_growing_seasonality_enum"`);
        await queryRunner.query(`CREATE TYPE "plant_light_requirements_enum_old" AS ENUM('low', 'medium', 'high')`);
        await queryRunner.query(`ALTER TABLE "plant" ALTER COLUMN "light_requirements" TYPE "plant_light_requirements_enum_old" USING "light_requirements"::"text"::"plant_light_requirements_enum_old"`);
        await queryRunner.query(`DROP TYPE "plant_light_requirements_enum"`);
        await queryRunner.query(`ALTER TYPE "plant_light_requirements_enum_old" RENAME TO  "plant_light_requirements_enum"`);
    }

}
