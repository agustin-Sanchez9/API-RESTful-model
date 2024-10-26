import { Component, OnInit } from '@angular/core';
import { Teacher } from '../../models/Teacher';
import { TeacherService } from '../../services/teacher.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css'
})
export class TeacherComponent implements OnInit {

  listTeachers: Teacher[] = [];
  selectedTeacher!: Teacher;
  constructor(private teacherService: TeacherService, private http: HttpClient) { }

  ngOnInit(): void {   
    this.list(); 
  }

  list(){
    this.teacherService.getTeachers().subscribe(resp=>{
      if(resp){
        this.listTeachers = resp;
      }
    });
  }

  selectTeacher(id: number): void {
    this.teacherService.getTeacherById(id).subscribe((teacher: Teacher)=>{
        this.selectedTeacher = teacher;
    })
  }

  edit():void{
    console.log(this.selectedTeacher);
    this.teacherService.updateTeacher(this.selectedTeacher).subscribe(()=>{
      this.list();
    });
  }
}
