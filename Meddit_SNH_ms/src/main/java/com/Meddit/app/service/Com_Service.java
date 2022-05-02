package com.Meddit.app.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.Meddit.app.DAO.Com_Sus_Repository;
import com.Meddit.app.entitiy.Community_suscription;

@Service
public class Com_Service {
	@Autowired
	private Com_Sus_Repository ComsusRepository;
	
	@Transactional(readOnly = true)
	public Iterable<Community_suscription> findAll() {
		return ComsusRepository.findAll();
	}

	@Transactional(readOnly = true)
	public Page<Community_suscription> findAll(Pageable pageable) {
		return ComsusRepository.findAll(pageable);
	}
	
	@Transactional(readOnly = true)
	public Optional<Community_suscription> findById(Long id) {
		return ComsusRepository.findById(id);
	}
	
	@Transactional
	public Community_suscription save(Community_suscription cs) {
		return ComsusRepository.save(cs);
	}
	
	@Transactional
	public void deleteById(Long id) {
		ComsusRepository.deleteById(id);
	}
	
	@Transactional
	public Iterable<Community_suscription> findByUser(long id_user) {
		return ComsusRepository.findById_user(id_user);
	}
}
