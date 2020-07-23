import {MigrationInterface, QueryRunner} from "typeorm";

export class initTables1593708547719 implements MigrationInterface {
    name = 'initTables1593708547719'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "site_condition" ("id" SERIAL NOT NULL, "environment" character varying NOT NULL, CONSTRAINT "PK_7228eb9554fdb0c42c42792fb6e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "plant_light_requirements_enum" AS ENUM('Low', 'Medium', 'High')`);
        await queryRunner.query(`CREATE TYPE "plant_growing_seasonality_enum" AS ENUM('Perennial', 'Annual', 'Biennial', 'Deciduous')`);
        await queryRunner.query(`CREATE TYPE "plant_plant_type_enum" AS ENUM('Shrub', 'Tree', 'GroundCover', 'Vine')`);
        await queryRunner.query(`CREATE TABLE "plant" ("id" SERIAL NOT NULL, "botanical_name" character varying NOT NULL, "friendly_name" character varying NOT NULL, "light_requirements" "plant_light_requirements_enum" NOT NULL, "growing_seasonality" "plant_growing_seasonality_enum" NOT NULL, "plant_type" "plant_plant_type_enum" NOT NULL, CONSTRAINT "PK_97e1eb0d045aadea59401ece5ba" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "attribute" ("id" SERIAL NOT NULL, "attribute_name" character varying NOT NULL, CONSTRAINT "PK_b13fb7c5c9e9dff62b60e0de729" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "plant_attributes_attribute" ("plantId" integer NOT NULL, "attributeId" integer NOT NULL, CONSTRAINT "PK_535e37603a112ccde33dfe2503a" PRIMARY KEY ("plantId", "attributeId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_344e81de04196b8ca49be2f959" ON "plant_attributes_attribute" ("plantId") `);
        await queryRunner.query(`CREATE INDEX "IDX_039dc5100a316bcb0b4fcf05c9" ON "plant_attributes_attribute" ("attributeId") `);
        await queryRunner.query(`CREATE TABLE "plant_site_conditions_site_condition" ("plantId" integer NOT NULL, "siteConditionId" integer NOT NULL, CONSTRAINT "PK_9f67f3bc411eadc079387bf8cb5" PRIMARY KEY ("plantId", "siteConditionId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_300d59fc6c431f1286ef2d5343" ON "plant_site_conditions_site_condition" ("plantId") `);
        await queryRunner.query(`CREATE INDEX "IDX_3340009f432818466c046ee1f1" ON "plant_site_conditions_site_condition" ("siteConditionId") `);
        await queryRunner.query(`ALTER TABLE "plant_attributes_attribute" ADD CONSTRAINT "FK_344e81de04196b8ca49be2f959c" FOREIGN KEY ("plantId") REFERENCES "plant"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "plant_attributes_attribute" ADD CONSTRAINT "FK_039dc5100a316bcb0b4fcf05c91" FOREIGN KEY ("attributeId") REFERENCES "attribute"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "plant_site_conditions_site_condition" ADD CONSTRAINT "FK_300d59fc6c431f1286ef2d5343b" FOREIGN KEY ("plantId") REFERENCES "plant"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "plant_site_conditions_site_condition" ADD CONSTRAINT "FK_3340009f432818466c046ee1f14" FOREIGN KEY ("siteConditionId") REFERENCES "site_condition"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "plant_site_conditions_site_condition" DROP CONSTRAINT "FK_3340009f432818466c046ee1f14"`);
        await queryRunner.query(`ALTER TABLE "plant_site_conditions_site_condition" DROP CONSTRAINT "FK_300d59fc6c431f1286ef2d5343b"`);
        await queryRunner.query(`ALTER TABLE "plant_attributes_attribute" DROP CONSTRAINT "FK_039dc5100a316bcb0b4fcf05c91"`);
        await queryRunner.query(`ALTER TABLE "plant_attributes_attribute" DROP CONSTRAINT "FK_344e81de04196b8ca49be2f959c"`);
        await queryRunner.query(`DROP INDEX "IDX_3340009f432818466c046ee1f1"`);
        await queryRunner.query(`DROP INDEX "IDX_300d59fc6c431f1286ef2d5343"`);
        await queryRunner.query(`DROP TABLE "plant_site_conditions_site_condition"`);
        await queryRunner.query(`DROP INDEX "IDX_039dc5100a316bcb0b4fcf05c9"`);
        await queryRunner.query(`DROP INDEX "IDX_344e81de04196b8ca49be2f959"`);
        await queryRunner.query(`DROP TABLE "plant_attributes_attribute"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "attribute"`);
        await queryRunner.query(`DROP TABLE "plant"`);
        await queryRunner.query(`DROP TYPE "plant_plant_type_enum"`);
        await queryRunner.query(`DROP TYPE "plant_growing_seasonality_enum"`);
        await queryRunner.query(`DROP TYPE "plant_light_requirements_enum"`);
        await queryRunner.query(`DROP TABLE "site_condition"`);
    }

}
