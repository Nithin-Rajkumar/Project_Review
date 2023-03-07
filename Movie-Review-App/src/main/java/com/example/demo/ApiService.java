package com.example.demo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ApiService {
	@Autowired
	MRepo repo;
	
	public Optional<MovieReview> getMovie(int id){
		return repo.findById( id);
	}
	public String updateMovie(MovieReview d) {
		repo.save( d);
		return "updated";
	}
	public String deleteMovie(int id) {
		repo.deleteById( id);
		return "ID DELETED";
	}
	public List<MovieReview>getAll(){
		return repo.findAll();	}
}
