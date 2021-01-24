package com.example.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.example.backend.model.Tweet;
import com.example.backend.model.User;
import com.example.backend.service.TweetService;
import com.example.backend.service.UserService;

@SpringBootApplication
public class BackendApplication {
	
	@Autowired
	private TweetService tweetservice;
	
	@Autowired
	private UserService userservice;

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}
	
	//Only run during the first time for data insertion
//	@Bean
//	CommandLineRunner runner() {
//		return args -> { 
//			User s1 = new User("john", "john");
//			userservice.saveUser(s1);
//			User s2 = new User("mary", "mary");
//			userservice.saveUser(s2);
//			User s3 = new User("peter", "peter");
//			userservice.saveUser(s3);
//			
//			Tweet t1 = new Tweet(userservice.findByUsername(s1.getUsername()), "First comment", System.currentTimeMillis());
//			Tweet t2 = new Tweet(userservice.findByUsername(s2.getUsername()), "Second comment", System.currentTimeMillis());
//			Tweet t3 = new Tweet(userservice.findByUsername(s3.getUsername()), "Third comment", System.currentTimeMillis());
//			Tweet t4 = new Tweet(userservice.findByUsername(s1.getUsername()), "Forth comment", System.currentTimeMillis());
//			tweetservice.saveTweet(t1);
//			tweetservice.saveTweet(t2);
//			tweetservice.saveTweet(t3);
//			tweetservice.saveTweet(t4);
//			
//			};
//	}

}
