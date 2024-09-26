package com.example.ARm.service;

import java.util.List;
import java.util.Optional;

import com.example.ARm.entity.StudentEntity;

public interface StudentInterface {

	List<StudentEntity> findAll();
	
	Optional<StudentEntity> findById(Integer id);
	
	void post(StudentEntity student);
	
	void update(StudentEntity student);
	
	void deleteById(Integer id);
	
}
