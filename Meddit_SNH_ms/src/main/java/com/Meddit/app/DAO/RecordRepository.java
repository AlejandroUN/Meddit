package com.Meddit.app.DAO;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.Meddit.app.entitiy.Record;

@Repository
public interface RecordRepository extends JpaRepository<Record, Long>{
	@Query(value = "SELECT * FROM records WERE id_user = :user", nativeQuery = true)
	List<Record> findByid_user(@Param("user") long id);
}
