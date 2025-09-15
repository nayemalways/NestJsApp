import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import type { IStudent } from './student.interface';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) {};

    @Get()
    getAllStudent() {
        return this.studentService.getStudents();
    }

    @Post()
    createStudent(@Body() body:IStudent) {
        return this.studentService.createStudent(body);
    }

    @Delete()
    deleteStudent(@Param() id: string) {
        console.log(id)
        return id;
    }
}
