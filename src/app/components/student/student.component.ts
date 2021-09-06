import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { Student } from './student.interface';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'student-root',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.less'],
  providers: [StudentService],
})
export class StudentComponent implements OnInit {
  width = '100';
  
  title = '学生信息';

  editStudent: Student | undefined;

  students: Student[] = [];

  initialSelection = [];
  
  allowMultiSelect = true;

  selection = new SelectionModel<Student>(this.allowMultiSelect, this.initialSelection);

  // 告诉表格，哪些列需要展示。
  displayedColumns: string[] = ['position', 'select', 'name', 'gender', 'age', 'weight', 'height', 'birthday', 'courses'];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    // this.getStudents();
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

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.students.length;
    return numSelected == numRows;
  }
  
  masterToggle() {
    this.isAllSelected() ?  this.selection.clear() : this.students.forEach(row => this.selection.select(row));
  }
}