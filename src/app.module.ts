import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';

@Module({
  imports: [StudentModule], // Import other modules here
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
