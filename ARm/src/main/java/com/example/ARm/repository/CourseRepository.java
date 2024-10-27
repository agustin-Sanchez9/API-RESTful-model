package com.example.ARm.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ARm.entity.CourseEntity;

public interface CourseRepository extends JpaRepository<CourseEntity, Integer> {

	List<CourseEntity> findAllByEndDate(LocalDate date);
}
