package com.Meddit.app.DAO;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.Meddit.app.entitiy.Channel_suscription;

@Repository
public interface Cha_Sus_Repository extends JpaRepository<Channel_suscription, Long>{
	//List<Channel_suscription> findById_user(long id_user);
	
	@Query(value = "SELECT ch FROM Channel_suscription ch WHERE ch.id_user LIKE :user")
	List<Channel_suscription> findById_user(@Param("user") long filtro);
}
