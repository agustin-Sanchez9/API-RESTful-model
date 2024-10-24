import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://localhost:8080/student'
  private apiUrlAll = 'http://localhost:8080/students'

  constructor(private http: HttpClient) { }

  // get all students
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrlAll);
  }

  // get one student by his id
  getStudentById(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.apiUrl}/${id}`);
  }

  // create a new student
  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.apiUrl, student);
  }

  // update a student
  updateStudent(id: number, student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.apiUrl}/${id}`, student);
  }

  // delete a student
  deleteStudent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
