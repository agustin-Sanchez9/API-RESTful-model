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

import com.example.ARm.entity.TeacherEntity;
import com.example.ARm.service.TeacherInterface;

@RestController
public class TeacherController {
	
	@Autowired
	TeacherInterface teacher_interface;
	
	@GetMapping("/teachers")
	public List<TeacherEntity> getTeachers(){
		return teacher_interface.findAll();
	}
	
	@GetMapping("/teacher")
	public Optional<TeacherEntity> getTeacher(@RequestParam Integer id){
		return teacher_interface.findById(id);
	}
	
	@PostMapping("/teacher")
	public void postTeacher(@RequestBody TeacherEntity teacher) {
		teacher_interface.post(teacher);
	}

	@PutMapping("/teacher")
	public void putTeacher(@RequestBody TeacherEntity teacher) {
		teacher_interface.update(teacher);
	}
	
	@DeleteMapping("/teacher")
	public void deleteTeacher(@RequestParam Integer id) {
		teacher_interface.deleteById(id);
	}
}
