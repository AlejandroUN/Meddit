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

import com.Meddit.app.entitiy.Channel_suscription;
import com.Meddit.app.service.Cha_Service;

@RestController
@RequestMapping("/api/channel_suscriptions")
public class ChSController {
	@Autowired
	private Cha_Service channelService;
	
	//Insert
	@PostMapping
	public ResponseEntity<?> create (@RequestBody Channel_suscription cs){
		return ResponseEntity.status(HttpStatus.CREATED).body(channelService.save(cs));
	}
	
	//Get (All channel subscriptions)
	@GetMapping
	public List<Channel_suscription> readAll (){
		List<Channel_suscription> subscriptions = StreamSupport.stream(channelService.findAll().spliterator(), false).collect(Collectors.toList());
			
		return subscriptions;
	}
	
	//Get (By user id)
	@GetMapping("/d/{id_user}")
	public List<Channel_suscription> read (@PathVariable(value = "id_user") Long userId){
		List<Channel_suscription> user_subscriptions = StreamSupport.stream(channelService.findByUser(userId).spliterator(), false).collect(Collectors.toList());
		
		return user_subscriptions;
	}
	
	//Delete
	@DeleteMapping("/{id}")
	public ResponseEntity<?> delete (@PathVariable(value = "id") Long Id){
		if(!channelService.findById(Id).isPresent()) {
			return ResponseEntity.notFound().build();
		}
		
		channelService.deleteById(Id);
		
		return ResponseEntity.ok().build();
	}
}
