package com.example.ARm.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.ARm.entity.TopicEntity;
import com.example.ARm.service.TopicInterface;

@RestController
public class TopicController {
	
	@Autowired
	TopicInterface topic_interface;
	
	@GetMapping("/topics")
	public List<TopicEntity> getTopics(){
		return topic_interface.findAll();
	}
	
	@GetMapping("/topic")
	public Optional<TopicEntity> getTopic(@RequestParam Integer id){
		return topic_interface.findById(id);
	}
	
	@PostMapping("/topic")
	public void postTopic(@RequestBody TopicEntity topic) {
		topic_interface.post(topic);
	}

	@PutMapping("/topic")
	public void putTopic(@RequestBody TopicEntity topic) {
		topic_interface.update(topic);
	}
	
	@DeleteMapping("/topic")
	public void deleteTopic(@RequestParam Integer id) {
		topic_interface.deleteById(id);
	}
}
