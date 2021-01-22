package com.example.backend.service;

import java.util.List;

import com.example.backend.model.Tweet;

public interface TweetService {
	public void deleteById(Long id);
	public Tweet saveTweet(Tweet tweet);
	public List<Tweet> listAllTweet();
}
