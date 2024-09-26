package com.example.ARm.service;

import java.util.List;
import java.util.Optional;

import com.example.ARm.entity.TeacherEntity;

public interface TeacherInterface {

	List<TeacherEntity> findAll();
	
	Optional<TeacherEntity> findById(Integer id);
	
	void post(TeacherEntity teacher);
	
	void update(TeacherEntity teacher);
	
	void deleteById(Integer id);
}