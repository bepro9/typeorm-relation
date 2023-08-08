import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Employee } from './employee.entity';

@Entity('task')
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  // we set this value to null, like a employee leave the company then his task will
  // not be deleted instead we set them to null
  @ManyToOne(() => Employee, (employee) => employee.tasks, {
    onDelete: 'SET NULL',
  })
  employee: Employee;
}
