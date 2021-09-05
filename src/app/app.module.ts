import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StudentComponent } from './components/student/student.component';
import { ClassroomComponent } from './components/classroom/classroom.component';
import { CourseComponent } from './components/course/course.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule } from '@angular/common/http';
import { HttpErrorHandler } from './services/http-error-handler.service';
import { MessageService } from './services/message.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    ClassroomComponent,
    CourseComponent,
    TeacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule
  ],
  providers: [
    HttpErrorHandler, // 添加的服务要引入app.module.ts，并加入到providers中
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
