package com.Meddit.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.Meddit.app.DAO.Cha_Sus_Repository;
import com.Meddit.app.entitiy.Channel_suscription;

@Service
public class Cha_Service {

	@Autowired
	private Cha_Sus_Repository ChasusRepository;
	
	@Transactional(readOnly = true)
	public Iterable<Channel_suscription> findAll() {
		return ChasusRepository.findAll();
	}

	@Transactional(readOnly = true)
	public Page<Channel_suscription> findAll(Pageable pageable) {
		return ChasusRepository.findAll(pageable);
	}
	
	@Transactional(readOnly = true)
	public Optional<Channel_suscription> findById(Long id) {
		return ChasusRepository.findById(id);
	}
	
	@Transactional
	public Channel_suscription save(Channel_suscription cs) {
		return ChasusRepository.save(cs);
	}
	
	@Transactional
	public void deleteById(Long id) {
		ChasusRepository.deleteById(id);
	}
	
	
	@Transactional
	public List<Channel_suscription> findByUser(long id_user) {
		return ChasusRepository.findById_user(id_user);
	}
	
	
}
