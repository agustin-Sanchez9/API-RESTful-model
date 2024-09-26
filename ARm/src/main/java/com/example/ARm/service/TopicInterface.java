package com.example.ARm.service;

import java.util.List;
import java.util.Optional;

import com.example.ARm.entity.TopicEntity;

public interface TopicInterface {

	List<TopicEntity> findAll();
	
	Optional<TopicEntity> findById(Integer id);
	
	void post(TopicEntity topic);
	
	void update(TopicEntity topic);
	
	void deleteById(Integer id);
}