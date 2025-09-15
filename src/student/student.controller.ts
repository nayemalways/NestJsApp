import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { StudentService } from './student.service';
import type { IStudent } from './student.interface';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getAllStudent() {
    return this.studentService.getStudents();
  }

  @Get(':id')
  getStudentById(@Param('id') id: string) {
    return this.studentService.getStudentById(Number(id));
  }

  @Post()
  createStudent(@Body() body: IStudent) {
    return this.studentService.createStudent(body);
  }

  @Delete(':id')
  deleteStudent(@Param('id') id: string) {
    return this.studentService.deleteStudent(Number(id));
  }

  @Put(':id')
  updateStudent(@Param('id') id: string, @Body() body: IStudent) {
    console.log(id, body);
    return this.studentService.updateFullStudent(Number(id), body);
  }

  @Patch(':id')
  patchUpdate(@Param('id') id: string, @Body() body: IStudent) {
    return this.studentService.patchStudent(Number(id), body);
  }
}
