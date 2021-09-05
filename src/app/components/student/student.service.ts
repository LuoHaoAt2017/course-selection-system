import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Student } from './student.interface';
import { HttpErrorHandler, HandleError } from '../../services/http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable()
export class StudentService {
  studentsUrl = '/api/student';  // URL to web api
  private handleError: HandleError;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('StudentsService');
  }

  /** GET students from the server */
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsUrl)
      .pipe(
        catchError(this.handleError('getStudents', []))
      );
  }

  /* GET students whose name contains search term */
  searchStudents(term: string): Observable<Student[]> {
    term = term.trim();

    // Add safe, URL encoded search parameter if there is a search term
    const options = term ? { params: new HttpParams().set('name', term) } : {};

    return this.http.get<Student[]>(this.studentsUrl, options)
      .pipe(
        catchError(this.handleError<Student[]>('searchStudents', []))
      );
  }

  //////// Save methods //////////

  /** POST: add a new student to the database */
  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.studentsUrl, student, httpOptions)
      .pipe(
        catchError(this.handleError('addStudent', student))
      );
  }

  /** DELETE: delete the student from the server */
  deleteStudent(id: number): Observable<unknown> {
    const url = `${this.studentsUrl}/${id}`; // DELETE api/students/42
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError('deleteStudent'))
      );
  }

  /** PUT: update the student on the server. Returns the updated student upon success. */
  updateStudent(student: Student): Observable<Student> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'my-new-auth-token');

    return this.http.put<Student>(this.studentsUrl, student, httpOptions)
      .pipe(
        catchError(this.handleError('updateStudent', student))
      );
  }
}
