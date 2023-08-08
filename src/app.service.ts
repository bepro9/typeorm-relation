import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';
import { Meeting } from './entities/meetings.entity';
import { ContactInfo } from './entities/contact-info.entity';
import { Task } from './entities/task.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Employee) private employeeRepo: Repository<Employee>,
    @InjectRepository(ContactInfo) private contactRepo: Repository<ContactInfo>,
    @InjectRepository(Meeting) private meetingRepo: Repository<Meeting>,
    @InjectRepository(Task) private taskRepo: Repository<Task>,
  ) {}

  async seed() {
    // Employee1
    const ceo = this.employeeRepo.create({ name: 'Sombir' });
    await this.employeeRepo.save(ceo);

    // Contact Info
    const ceoContactInfo = this.contactRepo.create({
      email: 'sombir@gmail.com',
      phone: '9876543210',
    });
    ceoContactInfo.employee = ceo;
    await this.contactRepo.save(ceoContactInfo);

    // Employee2
    const cto = this.employeeRepo.create({ name: 'Sayam', manager: ceo });

    // Task
    const task1 = this.taskRepo.create({ name: 'align team with in group' });
    await this.taskRepo.save(task1);

    const task2 = this.taskRepo.create({ name: 'hire node dev' });
    await this.taskRepo.save(task2);

    cto.tasks = [task1, task2];

    // Meetings
    const meeting1 = this.meetingRepo.create({ zoomUrl: 'meeting.com' });
    meeting1.attendees = [ceo];
    await this.meetingRepo.save(meeting1);

    cto.meetings = [meeting1];
    await this.employeeRepo.save(cto);
  }
  async deseed(id: string) {
    const removeEmp = this.employeeRepo.delete(id);
    await removeEmp;
  }
}
