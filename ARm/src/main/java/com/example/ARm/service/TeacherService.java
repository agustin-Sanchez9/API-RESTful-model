package com.example.ARm.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ARm.entity.StudentEntity;
import com.example.ARm.entity.TeacherEntity;
import com.example.ARm.repository.TeacherRepository;

@Service
public class TeacherService implements TeacherInterface{

	@Autowired
	private CourseInterface course_interface;
	
	@Autowired
	private TeacherRepository teacher_repository;
	
	@Override
	public List<TeacherEntity> findAll(){
		return teacher_repository.findAll();
	}
	
	public Optional<TeacherEntity> findById(Integer id){
		return teacher_repository.findById(id);
	}
	
	public void post(TeacherEntity teacher) {
		teacher_repository.save(teacher);
	}
	
	public void update(TeacherEntity teacher) {
		teacher_repository.save(teacher);
	}
	
	public void deleteById(Integer id) {
		teacher_repository.deleteById(id);
	}

	@Override
	public List<StudentEntity> findSelfStudents(Integer id){
		return course_interface.findStudentsByTeacher(id);
	}
}
