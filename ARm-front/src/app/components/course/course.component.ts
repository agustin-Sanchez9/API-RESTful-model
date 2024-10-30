import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/Course';
import { CourseService } from '../../services/course.service';
import { HttpClient } from '@angular/common/http';
import { Student } from '../../models/Student';
import { Topic } from '../../models/Topic';
import { Teacher } from '../../models/Teacher';
import { TeacherService } from '../../services/teacher.service';
import { StudentService } from '../../services/student.service';
import { TopicService } from '../../services/topic.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent implements OnInit {

  listCourses: Course[] = [];
  listTopics: Topic[] = [];
  listTeachers: Teacher[] = [];

  selectedCourse!: Course;
  selectedDate: Date = new Date;

  newTeacher: Teacher = new Teacher;
  newTopic: Topic = new Topic;

  newCourse: Course = new Course;
  
  constructor(private courseService: CourseService, private teacherService: TeacherService,
    private studentService: StudentService, private topicService: TopicService, private http: HttpClient) { }

  ngOnInit(): void {   
    this.getCourses();
    this.getTopics();
    this.getTeachers();
    if(this.selectedCourse.id){
      this.selectCourse(this.selectedCourse.id);
    }
    //this.selectCourse(1); //need to call at leats one to avoid ghost courses

  }

  getCourses(){
    this.courseService.getCourses().subscribe(resp=>{
      if(resp){
        this.listCourses = resp;
      }
    });
  }

  getCoursesByEndDate(){
    this.courseService.getCourseByEndDate(this.selectedDate).subscribe(resp=>{
      if(resp){
        this.listCourses = resp;
      }
    });
  }

  getTeachers(){
    this.teacherService.getTeachers().subscribe(resp=>{
      if(resp){
        this.listTeachers = resp;
      }
    });
  }

  getStudents(){
    this.courseService.getCourses().subscribe(resp=>{
      if(resp){
        this.listCourses = resp;
      }
    });
  }

  getTopics(){
    this.topicService.getTopics().subscribe(resp=>{
      if(resp){
        this.listTopics = resp;
      }
    });
  }

  selectCourse(id: number): void {
    this.courseService.getCourseById(id).subscribe((course: Course)=>{
        this.selectedCourse = course;
    })
  }
  
  edit():void{
    this.courseService.updateCourse(this.selectedCourse).subscribe(()=>{
      this.getCourses();
    });
  }

  new():void{
    this.newCourse.teacher = this.newTeacher;
    this.newCourse.topic = this.newTopic;
    this.courseService.createCourse(this.newCourse).subscribe(()=>{
      this.getCourses();
    });
  }

  delete():void{
    this.courseService.deleteCourse(this.selectedCourse.id).subscribe(()=>{
      this.getCourses();
    });
  }
}