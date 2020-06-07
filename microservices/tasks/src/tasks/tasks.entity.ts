// Dependencies
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * User tasks representation of table.
 * @author Daniel Mejia
 */
@Entity()
export class UsersTasks extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  state: string;

  @Column({ name: 'user_id' })
  userId: number;
}