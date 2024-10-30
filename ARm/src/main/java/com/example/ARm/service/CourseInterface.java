package com.example.ARm.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import com.example.ARm.entity.CourseEntity;
import com.example.ARm.entity.StudentEntity;

public interface CourseInterface {

	List<CourseEntity> findAll();
	
	Optional<CourseEntity> findById(Integer id);
	
	void post(CourseEntity course);
	
	void update(CourseEntity course);
	
	void deleteById(Integer id);
	
	List<CourseEntity> findAllByEndDate(LocalDate date);
	
	List<StudentEntity> findStudentsByTeacher(Integer id);
}