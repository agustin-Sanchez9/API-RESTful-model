import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/Student';
import { StudentService } from '../../services/student.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit {

  listStudents: Student[] = [];
  selectedStudent!: Student;
  newStudent: Student = new Student;
  constructor(private studentService: StudentService, private http: HttpClient) { }

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

  selectStudent(id: number): void {
    this.studentService.getStudentById(id).subscribe((student: Student)=>{
        this.selectedStudent = student;
    })
  }

  edit():void{
    console.log(this.selectedStudent);
    this.studentService.updateStudent(this.selectedStudent).subscribe(()=>{
      this.list();
    });
  }

  new():void{
    this.studentService.createStudent(this.newStudent).subscribe(()=>{
      this.list();
    });
  }

  delete():void{
    this.studentService.deleteStudent(this.selectedStudent.id).subscribe(()=>{
      this.list();
    });
  }
}
