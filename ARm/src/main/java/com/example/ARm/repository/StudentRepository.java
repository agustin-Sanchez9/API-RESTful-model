package com.example.ARm.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ARm.entity.StudentEntity;

public interface StudentRepository extends JpaRepository<StudentEntity, Integer>{

}
