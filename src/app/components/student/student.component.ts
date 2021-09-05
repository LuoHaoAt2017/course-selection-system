import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { Student } from './student.interface';

@Component({
  selector: 'student-root',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.less'],
  providers: [StudentService]
})
export class StudentComponent implements OnInit {
  title = '学生信息';

  editStudent: Student | undefined;

  students: Student[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudents()
      .subscribe(students => (this.students = students));
  }

  add(name: string): void {
    this.editStudent = undefined;
    name = name.trim();
    if (!name) {
      return;
    }

    // The server will generate the id for this new student
    const editStudent: Student = { name } as Student;
    this.studentService.addStudent(editStudent)
      .subscribe(student => this.students.push(student));
  }

  delete(student: Student): void {
    this.students = this.students.filter(h => h !== student);
    this.studentService.deleteStudent(student.id).subscribe();
  }

  edit(student: Student) {
    this.editStudent = student;
  }

  search(searchTerm: string) {
    this.editStudent = undefined;
    if (searchTerm) {
      this.studentService
        .searchStudents(searchTerm)
        .subscribe(students => (this.students = students));
    }
  }

  update() {
    if (this.editStudent) {
      this.studentService
        .updateStudent(this.editStudent)
        .subscribe(student => {
        // replace the hero in the heroes list with update from server
        const ix = student ? this.students.findIndex(h => h.id === student.id) : -1;
        if (ix > -1) {
          this.students[ix] = student;
        }
      });
      this.editStudent = undefined;
    }
  }
}