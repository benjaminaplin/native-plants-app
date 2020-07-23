import {MigrationInterface, QueryRunner} from "typeorm";

export class changeAttrName1593713445372 implements MigrationInterface {
    name = 'changeAttrName1593713445372'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "site_condition" RENAME COLUMN "environment" TO "name"`);
        await queryRunner.query(`ALTER TABLE "attribute" RENAME COLUMN "attribute_name" TO "name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "attribute" RENAME COLUMN "name" TO "attribute_name"`);
        await queryRunner.query(`ALTER TABLE "site_condition" RENAME COLUMN "name" TO "environment"`);
    }

}
