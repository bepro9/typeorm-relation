import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { ContactInfo } from './contact-info.entity';
import { Task } from './task.entity';
import { Meeting } from './meetings.entity';

@Entity('employee')
export class Employee {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  name: string;

  /*
   * One to One
   */

  @OneToOne(() => ContactInfo, (contactInfo) => contactInfo.employee, {
    onDelete: 'CASCADE',
  })
  contactInfo: ContactInfo;

  /*
   * One to Many
   */

  @OneToMany(() => Task, (task) => task.employee)
  tasks: Task[];

  /*
   * Self Referencing Relations
   */

  @ManyToOne(() => Employee, (employee) => employee.directReports, {
    onDelete: 'SET NULL',
  })
  manager: Employee;

  @OneToMany(() => Task, (task) => task.employee)
  directReports: Employee[];

  /*
   * Many to Many
   */

  @ManyToMany(() => Meeting, (meeting) => meeting.attendees)
  @JoinTable()
  meetings: Meeting[];
}
