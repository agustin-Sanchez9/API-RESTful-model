package com.example.ARm.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.ARm.entity.StudentEntity;
import com.example.ARm.service.StudentInterface;

@RestController
public class StudentController {
	
	@Autowired
	StudentInterface student_interface;
	
	@GetMapping("/students")
	public List<StudentEntity> getStudents(){
		return student_interface.findAll();
	}
	
	@GetMapping("/student")
	public Optional<StudentEntity> getStudent(@RequestParam Integer id){
		return student_interface.findById(id);
	}
	
	@PostMapping("/student")
	public void postStudent(@RequestBody StudentEntity student) {
		student_interface.post(student);
	}

	@PutMapping("/student")
	public void putStudent(@RequestBody StudentEntity student) {
		student_interface.update(student);
	}
	
	@DeleteMapping("/student")
	public void deleteStudent(@RequestParam Integer id) {
		student_interface.deleteById(id);
	}
}
