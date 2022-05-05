package com.Meddit.app.entitiy;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "community_suscriptions")
public class Community_suscription implements Serializable{
	
	private static final long serialVersionUID = 4059269024272526000L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name="id_user")
	private long id_user;
	
	private long id_community;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public long getId_user() {
		return id_user;
	}

	public void setId_user(long id_user) {
		this.id_user = id_user;
	}

	public long getId_community() {
		return id_community;
	}

	public void setId_community(long id_community) {
		this.id_community = id_community;
	}
	
	
}
