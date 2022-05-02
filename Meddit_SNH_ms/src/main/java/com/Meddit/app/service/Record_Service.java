package com.Meddit.app.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.Meddit.app.DAO.RecordRepository;
import com.Meddit.app.entitiy.Record;

@Service
public class Record_Service {
	
	@Autowired
	private RecordRepository recordRepository;
	
	@Transactional(readOnly = true)
	public Iterable<Record> findAll() {
		return recordRepository.findAll();
	}

	@Transactional(readOnly = true)
	public Page<Record> findAll(Pageable pageable) {
		return recordRepository.findAll(pageable);
	}
	
	@Transactional(readOnly = true)
	public Optional<Record> findById(Long id) {
		return recordRepository.findById(id);
	}
	
	@Transactional
	public Record save(Record cs) {
		return recordRepository.save(cs);
	}
	
	@Transactional
	public void deleteById(Long id) {
		recordRepository.deleteById(id);
	}
	
	@Transactional
	public Iterable<Record> findByUser(long id_user) {
		return recordRepository.findById_user(id_user);
	}
}
