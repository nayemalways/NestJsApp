import { Injectable } from '@nestjs/common';
import { IStudent } from './student.interface';

@Injectable()
export class StudentService {
    private students: IStudent[] = [];

    createStudent(data: IStudent) {
         this.students.push(data);
         return "Student created success!";
    }

    getStudents() {
        return this.students;
    }

    deleteStudent(id: number) {
        let deleteItem = this.students.filter(student => student.id != id);
        this.students.push(...deleteItem);
        return {
            message: "Deleted success",
            data: this.students
        }
    }
       
}
