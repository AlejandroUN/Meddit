package com.Meddit.app.DAO;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.Meddit.app.entitiy.Community_suscription;

@Repository
public interface Com_Sus_Repository extends JpaRepository<Community_suscription, Long>{
	@Query(value = "SELECT co FROM Community_suscription co WHERE co.id_user LIKE :user")
	List<Community_suscription> findById_user(@Param("user") long id);
}
