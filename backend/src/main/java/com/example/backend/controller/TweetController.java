package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Tweet;
import com.example.backend.service.TweetService;
import com.example.backend.service.UserService;

@RestController
@CrossOrigin
@RequestMapping("/api/tweet/")
public class TweetController {

	@Autowired
	private TweetService tweetservice;
	
	@Autowired
	private UserService userservice;
	
	//getting all tweets
	@GetMapping("/tweets")
	public ResponseEntity<List<Tweet>> getAllTweets() {
		return new ResponseEntity<List<Tweet>>(tweetservice.listAllTweet(), HttpStatus.OK);
	}
	
	//create a new tweet
	@PostMapping("/new/{userId}")
	public ResponseEntity<Tweet> newTweet(@PathVariable("userId") long userId,@RequestBody Tweet tweet) {
		return new ResponseEntity<Tweet>(tweetservice.saveTweet(new Tweet(userservice.findByUseId(userId), tweet.getTweet(),tweet.getTimeStamp())), HttpStatus.OK);
	}
	
	//remove tweet
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Boolean> deleteTweet(@PathVariable("id") long Id) {
		try {
			tweetservice.deleteById(Id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}
	}
}
