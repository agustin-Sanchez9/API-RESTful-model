package com.example.ARm.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.ARm.entity.CourseEntity;
import com.example.ARm.service.CourseInterface;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CourseController {
	
	@Autowired
	CourseInterface course_interface;
	
	@GetMapping("/courses")
	public List<CourseEntity> getCourses(){
		return course_interface.findAll();
	}
	
	@GetMapping("/course")
	public Optional<CourseEntity> getCourse(@RequestParam Integer id){
		return course_interface.findById(id);
	}
	
	@PostMapping("/course")
	public void postCourse(@RequestBody CourseEntity course) {
		course_interface.post(course);
	}

	@PutMapping("/course")
	public void putCourse(@RequestBody CourseEntity course) {
		course_interface.update(course);
	}
	
	@DeleteMapping("/course")
	public void deleteCourse(@RequestParam Integer id) {
		course_interface.deleteById(id);
	}
}
