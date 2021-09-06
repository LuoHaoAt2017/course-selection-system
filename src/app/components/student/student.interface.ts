export interface Student {
  id: string;
  position: number; // 序号
  select: boolean; // 是否选中
  name: string; // 姓名
  gender: boolean;  // 性别
  age: number; // 年龄
  height: number; // 身高
  weight: number; // 体重
  classes: string; // 班级
  birthday: string; // 出生
  homedown: string; // 家乡
  courses: string[]; // 选修的课程
}
