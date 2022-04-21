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

import com.Meddit.app.service.Record_Service;
import com.Meddit.app.entitiy.Record;

@RestController
@RequestMapping("/api/record")
public class RController {
	@Autowired
	private Record_Service recordService;
	
	//Insert
	@PostMapping
	public ResponseEntity<?> create (@RequestBody Record cs){
		return ResponseEntity.status(HttpStatus.CREATED).body(recordService.save(cs));
	}
	
	//Get (By user id)
	@GetMapping("/d/{id_user}")
	public List<Record> read (@PathVariable(value = "id_user") Long userId){
		List<Record> user_record = StreamSupport.stream(recordService.findByUser(userId).spliterator(), false).collect(Collectors.toList());
			
		return user_record;
	}
	
	//Delete
	@DeleteMapping("/{id}")
	public ResponseEntity<?> delete (@PathVariable(value = "id") Long Id){
		if(!recordService.findById(Id).isPresent()) {
			return ResponseEntity.notFound().build();
		}
				
		recordService.deleteById(Id);
			
		return ResponseEntity.ok().build();
	}
}
