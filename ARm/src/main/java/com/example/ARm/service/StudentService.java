package com.example.ARm.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ARm.entity.StudentEntity;
import com.example.ARm.repository.StudentRepository;

@Service
public class StudentService implements StudentInterface{
	
	@Autowired
	private StudentRepository student_repository;
	
	@Override
	public List<StudentEntity> findAll(){
		return student_repository.findAll();
	}
	
	public Optional<StudentEntity> findById(Integer id){
		return student_repository.findById(id);
	}
	
	public void post(StudentEntity student) {
		student_repository.save(student);
	}
	
	public void update(StudentEntity student) {
		student_repository.save(student);
	}
	
	public void deleteById(Integer id) {
		student_repository.deleteById(id);
	}
}
