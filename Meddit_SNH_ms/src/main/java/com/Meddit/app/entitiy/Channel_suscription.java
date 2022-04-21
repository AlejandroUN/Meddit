package com.Meddit.app.entitiy;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "channel_suscriptions")
public class Channel_suscription implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 3256723116907796874L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name="id_user")
	private long id_user;
	
	private long id_channel;

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

	public long getId_channel() {
		return id_channel;
	}

	public void setId_channel(long id_channel) {
		this.id_channel = id_channel;
	}
	
	
}