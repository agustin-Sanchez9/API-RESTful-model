import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/Course';
import { CourseService } from '../../services/course.service';
import { HttpClient } from '@angular/common/http';
import { Student } from '../../models/Student';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent implements OnInit {

  listCourses: Course[] = [];
  selectedCourse: any;
  constructor(private courseService: CourseService, private http: HttpClient) { }

  ngOnInit(): void {   
    this.list();
  }

  list(){
    this.courseService.getCourses().subscribe(resp=>{
      if(resp){
        this.listCourses = resp;
      }
    });
  }

  selectCourse(id: number): void {
    this.courseService.getCourseById(id).subscribe((course: Course)=>{
        this.selectedCourse = course;
    })
  }
  
}