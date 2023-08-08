import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Employee } from './employee.entity';

@Entity('meeting')
export class Meeting {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  zoomUrl: string;

  @ManyToMany(() => Employee, (employee) => employee.meetings)
  attendees: Employee[];
}
