import {MigrationInterface, QueryRunner} from "typeorm";

export class makeAttrNameUniq1593713991151 implements MigrationInterface {
    name = 'makeAttrNameUniq1593713991151'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "site_condition" ADD CONSTRAINT "UQ_f64b5f19bee1cf0c0daa47dcc24" UNIQUE ("name")`);
        await queryRunner.query(`ALTER TABLE "attribute" ADD CONSTRAINT "UQ_350fb4f7eb87e4c7d35c97a9828" UNIQUE ("name")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "attribute" DROP CONSTRAINT "UQ_350fb4f7eb87e4c7d35c97a9828"`);
        await queryRunner.query(`ALTER TABLE "site_condition" DROP CONSTRAINT "UQ_f64b5f19bee1cf0c0daa47dcc24"`);
    }

}
