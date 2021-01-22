package com.example.backend.service;

import java.util.List;

import com.example.backend.model.Tweet;
import com.example.backend.model.User;

public interface UserService {
	public User findByUsername(String userName);
	public User findByUseId(Long userId);
	public List<Tweet> findTweetByUsername(String userName);
	public boolean loginValidation(String username, String password);
	
}
