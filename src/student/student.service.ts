import { Injectable, NotFoundException } from '@nestjs/common';
import { IStudent } from './student.interface';

@Injectable()
export class StudentService {
  private students: IStudent[] = [];

  createStudent(data: IStudent) {
    this.students.push(data);
    return 'Student created success!';
  }

  getStudents() {
    return this.students;
  }

  getStudentById(id: number) {
    const student = this.students.filter((student) => student.id === id);
    if (student.length === 0) throw new NotFoundException(`Student not found`);
    console.log(student);
    return student[0];
  }

  deleteStudent(id: number) {
    const deleteItem: IStudent[] = this.students.filter(
      (student: IStudent) => student.id != id,
    );

    if (deleteItem.length === 0) throw new NotFoundException(`Not found`);

    this.students = [deleteItem[0]];
    return {
      message: 'Deleted success',
      data: this.students,
    };
  }

  updateFullStudent(id: number, data: IStudent) {
    const index = this.students.findIndex((student) => student.id === id);
    if (index === -1) throw new NotFoundException(`User not found`);

    data.id = id;
    this.students[index] = { ...data };
    return this.students[index];
  }

  patchStudent(id: number, data: Partial<IStudent>) {
    const student = this.getStudentById(id);
    if (!student) throw new NotFoundException(`Student not found`);

    Object.assign(student, data);
    return student;
  }
}
