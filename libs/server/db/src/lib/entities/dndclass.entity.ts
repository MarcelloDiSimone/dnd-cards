import { IDndClassModel } from '@interfaces';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('classes')
export class DndClass implements IDndClassModel {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({ length: 100 })
  name!: string;
}
