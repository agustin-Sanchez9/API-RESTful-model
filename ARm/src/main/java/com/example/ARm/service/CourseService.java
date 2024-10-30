package com.example.ARm.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ARm.entity.CourseEntity;
import com.example.ARm.entity.StudentEntity;
import com.example.ARm.repository.CourseRepository;

@Service
public class CourseService implements CourseInterface{
	
	@Autowired
	private CourseRepository course_repository;
	
	@Override
	public List<CourseEntity> findAll(){
		return course_repository.findAll();
	}
	
	public Optional<CourseEntity> findById(Integer id){
		return course_repository.findById(id);
	}
	
	public void post(CourseEntity course) {
		course_repository.save(course);
	}
	
	public void update(CourseEntity course) {
		course_repository.save(course);
	}
	
	public void deleteById(Integer id) {
		course_repository.deleteById(id);
	}
	
	public List<CourseEntity> findAllByEndDate(LocalDate date) {
		return course_repository.findAllByEndDate(date);
	}

	@Override
	public List<StudentEntity> findStudentsByTeacher(Integer id) {
		CourseEntity course = course_repository.findByTeacher_Id(id);
		return course.getStudents();
	}
}
