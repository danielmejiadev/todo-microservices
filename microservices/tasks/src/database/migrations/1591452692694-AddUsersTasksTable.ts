// Dependencies
import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

/**
 * Add users tasks table migration.
 * @author Daniel Mejia.
 */
export class AddUsersTasksTable1591282139480 implements MigrationInterface {
    /**
     * Runs the migrations to create the users tasks table.
     * @param queryRunner The typeorm query runner.
     */
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users_tasks',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'description',
                    type: 'varchar',
                },
                {
                    name: 'state',
                    type: 'varchar',
                },
                {
                    name: 'user_id',
                    type: 'int',
                }
            ]
        }), true)

        await queryRunner.createForeignKey('users_tasks', new TableForeignKey({
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'CASCADE'
        }));
    }

    /**
     * Runs the rollback to reverse the migration.
     * @param queryRunner The typeorm query runner.
     */
    public async down(queryRunner: QueryRunner): Promise<void> {
        const usersTasks = await queryRunner.getTable('users_tasks');
        for (const foreignKey of usersTasks.foreignKeys) {
            await queryRunner.dropForeignKey('users_tasks', foreignKey);
        }
        await queryRunner.dropTable('users_tasks');
    }
}
