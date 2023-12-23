import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Task } from './entities/task.entity';
import { Meeting } from './entities/meetings.entity';
import { ContactInfo } from './entities/contact-info.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'local1',
      username: 'postgres',
      password: 'root',
      entities: [__dirname + '/entities/*.entity.{js,ts}'],
      synchronize: true,
      logging: true,
    }),
    TypeOrmModule.forFeature([Employee, Task, Meeting, ContactInfo]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
