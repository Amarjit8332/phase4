package com.kitchen;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
@RestController
@CrossOrigin(origins="*")
public class Controller {
	@Autowired
	Repository repo;
	
	@PostMapping("/register")
	public String register(@RequestBody User user) {
		repo.save(user);
		return " "+user.getName()+" is register successfully";
	}
	
	@GetMapping("/getAllitem")
	public List<User> findAllusers(){
		return repo.findAll();
	}
	
	@DeleteMapping("/cancel/{id}")
	public List<User> cancelitem(@PathVariable long id){
		repo.deleteById(id);
		return repo.findAll();
	}
	
	@GetMapping("/findbyname/{name}")
	public List<User> findByname(@PathVariable String name){
	    return repo.findByname(name);
	}
	

}
