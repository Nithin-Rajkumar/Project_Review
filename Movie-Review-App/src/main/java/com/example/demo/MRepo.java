package com.example.demo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface MRepo extends JpaRepository<MovieReview,Integer>{
	List<MovieReview>findAll();

}
