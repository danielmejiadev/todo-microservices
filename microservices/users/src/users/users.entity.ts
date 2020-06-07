// Dependencies
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * Users table representation.
 * @author Daniel Mejia
 */
@Entity()
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}