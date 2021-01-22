package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Tweet;
import com.example.backend.service.TweetService;
import com.example.backend.service.UserService;

@RestController
@CrossOrigin
@RequestMapping("/api/user")
public class UserController {
	
	@Autowired
	private UserService userservice;
	
	@Autowired
	private TweetService tweetservice;
	
	//for filtering tweets based on username
	@GetMapping("/tweets")
	public ResponseEntity<List<Tweet>> getTweetsByUser(String username) {
		return new ResponseEntity<List<Tweet>>(userservice.findTweetByUsername(username), HttpStatus.OK);
	}
	
	//for login
	@PostMapping("/login")
	public ResponseEntity<Boolean> LoginValidation(String username, String password){
		return new ResponseEntity<Boolean>(userservice.loginValidation(username, password), HttpStatus.OK);
	}
}
