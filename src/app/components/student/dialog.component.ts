import { Component } from "@angular/core";
import { DialogPosition } from "@angular/material/dialog";
import { StudentService } from "./student.service";

interface Course {
  label: string;
  value: string;
}

@Component({
  selector: 'student-dialog',
  templateUrl: 'dialog.component.html',
  styleUrls: ['dialog.component.less'],
  providers: [StudentService]
})
export class StudentDialog implements DialogPosition {

  top = '0';

  bottom = '0';

  left = '0';

  right = '0';

  courses: Course[] = [
    {
      label: '数学',
      value: '0001',
    },
    {
      label: '物理',
      value: '0002',
    },
    {
      label: '计算机',
      value: '0003',
    }
  ];
}