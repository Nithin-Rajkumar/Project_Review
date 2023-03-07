package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class MovieReview {
	@Id
	private int id;
	private String movie_name;
	private int stars;
	public MovieReview() {
		super();
		// TODO Auto-generated constructor stub
	}
	public MovieReview(int id, String movie_name, int stars) {
		super();
		this.id = id;
		this.movie_name = movie_name;
		this.stars = stars;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getMovie_name() {
		return movie_name;
	}
	public void setMovie_name(String movie_name) {
		this.movie_name = movie_name;
	}
	public int getStars() {
		return stars;
	}
	public void setStars(int stars) {
		this.stars = stars;
	}
	
}
