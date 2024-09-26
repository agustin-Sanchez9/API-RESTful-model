package com.example.ARm.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ARm.entity.TopicEntity;
import com.example.ARm.repository.TopicRepository;

@Service
public class TopicService implements TopicInterface{
	
	@Autowired
	private TopicRepository topic_repository;
	
	@Override
	public List<TopicEntity> findAll(){
		return topic_repository.findAll();
	}
	
	public Optional<TopicEntity> findById(Integer id){
		return topic_repository.findById(id);
	}
	
	public void post(TopicEntity topic) {
		topic_repository.save(topic);
	}
	
	public void update(TopicEntity topic) {
		topic_repository.save(topic);
	}
	
	public void deleteById(Integer id) {
		topic_repository.deleteById(id);
	}
}
