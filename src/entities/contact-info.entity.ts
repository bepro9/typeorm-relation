import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Employee } from './employee.entity';

@Entity('contact-info')
export class ContactInfo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  phone: string;

  @Column()
  email: string;

  // we made it bidirectionl, so that we can query from employee table also
  // adding joincolumn here since its going to hold the data for each employee
  // we need to add onDelete param both side of relation , to cascade delete properly
  @OneToOne(() => Employee, (employee) => employee.contactInfo, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  employee: Employee;
}
