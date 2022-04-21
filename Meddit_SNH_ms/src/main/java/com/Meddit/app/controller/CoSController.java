package com.Meddit.app.controller;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Meddit.app.entitiy.Community_suscription;
import com.Meddit.app.service.Com_Service;

@RestController
@RequestMapping("/api/community_suscriptions")
public class CoSController {
	@Autowired
	private Com_Service communityService;
	
	//Insert
	@PostMapping
	public ResponseEntity<?> create (@RequestBody Community_suscription cs){
		return ResponseEntity.status(HttpStatus.CREATED).body(communityService.save(cs));
	}
	
	//Get (All community subscriptions)
	@GetMapping
	public List<Community_suscription> readAll (){
		List<Community_suscription> subscriptions = StreamSupport.stream(communityService.findAll().spliterator(), false).collect(Collectors.toList());
			
		return subscriptions;
	}
	
	//Get (By user id)
	@GetMapping("/d/{id_user}")
	public List<Community_suscription> read (@PathVariable(value = "id_user") Long userId){
		List<Community_suscription> user_subscriptions = StreamSupport.stream(communityService.findByUser(userId).spliterator(), false).collect(Collectors.toList());
		
		return user_subscriptions;
	}
	
	//Delete
	@DeleteMapping("/{id}")
	public ResponseEntity<?> delete (@PathVariable(value = "id") Long Id){
		if(!communityService.findById(Id).isPresent()) {
			return ResponseEntity.notFound().build();
		}
			
		communityService.deleteById(Id);
			
		return ResponseEntity.ok().build();
	}
}
