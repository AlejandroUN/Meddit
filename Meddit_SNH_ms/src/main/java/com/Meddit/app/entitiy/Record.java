package com.Meddit.app.entitiy;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "records")
public class Record implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 7014019685896041558L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name="id_user")
	private long id_user;
	
	private long id_video;
	
	private long position_inside_record;

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

	public long getId_video() {
		return id_video;
	}

	public void setId_video(long id_video) {
		this.id_video = id_video;
	}

	public long getPosition_inside_record() {
		return position_inside_record;
	}

	public void setPosition_inside_record(long position_inside_record) {
		this.position_inside_record = position_inside_record;
	}
}
