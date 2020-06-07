// Dependencies
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

/**
 * Add users table migration.
 * @author Daniel Mejia.
 */
export class AddUsersTable1591242305441 implements MigrationInterface {
    /**
     * Runs the migrations to create the users table.
     * @param queryRunner The typeorm query runner.
     */
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'name',
                    type: 'varchar',
                }
            ]
        }), true)
    }

    /**
     * Runs the rollback to reverse the migration.
     * @param queryRunner The typeorm query runner.
     */
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }
}
