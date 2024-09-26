package com.example.ARm.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ARm.entity.CourseEntity;

public interface CourseRepository extends JpaRepository<CourseEntity, Integer> {

}
