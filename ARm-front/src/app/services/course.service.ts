import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/Course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiUrl = 'http://localhost:8080/course'
  private apiUrlAll = 'http://localhost:8080/courses'

  constructor(private http: HttpClient) { }

  // get all courses
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrlAll);
  }

  // get one course by his id
  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}?id=${id}`);
  }

  // create a new course
  createCourse(Course: Course): Observable<Course> {
    return this.http.post<Course>(this.apiUrl, Course);
  }

  // update a course
  updateCourse(Course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.apiUrl}`, Course);
  }

  // delete a course
  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}?id=${id}`);
  }
}
