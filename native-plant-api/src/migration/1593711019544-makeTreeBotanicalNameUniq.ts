import {MigrationInterface, QueryRunner} from "typeorm";

export class makeTreeBotanicalNameUniq1593711019544 implements MigrationInterface {
    name = 'makeTreeBotanicalNameUniq1593711019544'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "plant" ADD CONSTRAINT "UQ_2270e85c3d227345228b347337b" UNIQUE ("botanical_name")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "plant" DROP CONSTRAINT "UQ_2270e85c3d227345228b347337b"`);
    }

}
