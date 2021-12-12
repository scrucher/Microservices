import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsModule } from './students/students.module';
import { ClassroomModule } from './classroom/classroom.module';
import { CourseModule } from './course/course.module';
import { TeacherModule } from './teacher/teacher.module';
import { ClientsModule, Transport } from '@nestjs/microservices';


@Module({
  imports: [
    StudentsModule, CourseModule, ClassroomModule, TeacherModule,
    ClassroomModule,
    ClientsModule.register([
      {
        name: 'CLientService',
        transport: Transport.REDIS,
        options: {
          url: 'redis://localhost:6379',
        }
      },
    ]),
  ],

})
export class AppModule {}
