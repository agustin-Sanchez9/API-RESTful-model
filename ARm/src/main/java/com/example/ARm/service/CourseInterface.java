package com.example.ARm.service;

import java.util.List;
import java.util.Optional;

import com.example.ARm.entity.CourseEntity;

public interface CourseInterface {

	List<CourseEntity> findAll();
	
	Optional<CourseEntity> findById(Integer id);
	
	void post(CourseEntity course);
	
	void update(CourseEntity course);
	
	void deleteById(Integer id);
}