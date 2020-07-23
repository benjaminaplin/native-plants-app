import {MigrationInterface, QueryRunner} from "typeorm";

export class addLightReq1593711279291 implements MigrationInterface {
    name = 'addLightReq1593711279291'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TYPE "public"."plant_light_requirements_enum" RENAME TO "plant_light_requirements_enum_old"`);
        await queryRunner.query(`CREATE TYPE "plant_light_requirements_enum" AS ENUM('full_sun', 'full_sun_to_part_shade', 'part_shade', 'part_shade_to_full_shade', 'full_shade')`);
        await queryRunner.query(`ALTER TABLE "plant" ALTER COLUMN "light_requirements" TYPE "plant_light_requirements_enum" USING "light_requirements"::"text"::"plant_light_requirements_enum"`);
        await queryRunner.query(`DROP TYPE "plant_light_requirements_enum_old"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "plant_light_requirements_enum_old" AS ENUM('full_sun', 'part_shade', 'full_shade')`);
        await queryRunner.query(`ALTER TABLE "plant" ALTER COLUMN "light_requirements" TYPE "plant_light_requirements_enum_old" USING "light_requirements"::"text"::"plant_light_requirements_enum_old"`);
        await queryRunner.query(`DROP TYPE "plant_light_requirements_enum"`);
        await queryRunner.query(`ALTER TYPE "plant_light_requirements_enum_old" RENAME TO  "plant_light_requirements_enum"`);
    }

}
