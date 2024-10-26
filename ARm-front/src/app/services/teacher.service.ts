import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teacher } from '../models/Teacher';


@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private apiUrl = 'http://localhost:8080/teacher'
  private apiUrlAll = 'http://localhost:8080/teachers'

  constructor(private http: HttpClient) { }

  // get all teachers
  getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.apiUrlAll);
  }

  // get one teacher by his id
  getTeacherById(id: number): Observable<Teacher> {
    return this.http.get<Teacher>(`${this.apiUrl}?id=${id}`);
  }

  // create a new teacher
  createTeacher(Teacher: Teacher): Observable<Teacher> {
    return this.http.post<Teacher>(this.apiUrl, Teacher);
  }

  // update a teacher
  updateTeacher(Teacher: Teacher): Observable<Teacher> {
    return this.http.put<Teacher>(`${this.apiUrl}`, Teacher);
  }

  // delete a teacher
  deleteTeacher(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}?id=${id}`);
  }
}
