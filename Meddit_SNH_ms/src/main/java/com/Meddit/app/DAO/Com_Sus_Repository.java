package com.Meddit.app.DAO;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.Meddit.app.entitiy.Community_suscription;

@Repository
public interface Com_Sus_Repository extends JpaRepository<Community_suscription, Long>{
	@Query(value = "SELECT * FROM community_suscriptions WERE id_user = :user", nativeQuery = true)
	List<Community_suscription> findByid_user(@Param("user") long id);
}
