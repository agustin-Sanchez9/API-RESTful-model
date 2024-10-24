import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/Student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit {

  listStudents: Student[] = [];
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {   
    this.list(); 
  }

  list(){
    this.studentService.getStudents().subscribe(resp=>{
      if(resp){
        this.listStudents = resp;
      }
    });
  }
}
