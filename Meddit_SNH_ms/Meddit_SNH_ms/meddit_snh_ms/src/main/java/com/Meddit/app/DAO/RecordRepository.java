package com.Meddit.app.DAO;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.Meddit.app.entitiy.Record;

@Repository
public interface RecordRepository extends JpaRepository<Record, Long>{
	@Query(value = "SELECT r FROM Record r WHERE r.id_user LIKE :user")
	List<Record> findById_user(@Param("user") long id);
}
