package com.example.demo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class ApiController {
	@Autowired
	MRepo repo;
	@Autowired
	ApiService service;
	
	@GetMapping("/getvalues")
	public List<MovieReview> getList(){
		return service.getAll();
	}
	
	@PostMapping("/post")
	public MovieReview create(@RequestBody MovieReview m) {
		return repo.save(m);
	}
	@GetMapping("/getvalues/{id}")
	public Optional<MovieReview> getByid(@PathVariable int id){
		return service.getMovie(id);
	}
	@PutMapping("/update")
	public String update(@RequestBody MovieReview d) {
		return service.updateMovie(d);
	}
	@DeleteMapping("/delete")
	public String delete(@RequestParam int id) {
		return service.deleteMovie(id);
	}
}
