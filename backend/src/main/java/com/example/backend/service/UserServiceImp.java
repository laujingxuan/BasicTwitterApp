package com.example.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.backend.model.Tweet;
import com.example.backend.model.User;
import com.example.backend.repo.UserRepository;

public class UserServiceImp implements UserService {

	@Autowired
	private UserRepository userrepo;
	
	@Override
	public User findByUsername(String userName) {
		return userrepo.findByUsername(userName);
	}

	@Override
	public List<Tweet> findTweetByUsername(String userName) {
		return findByUsername(userName).getTweets();
	}

	@Override
	public boolean loginValidation(String username, String password) {
		User user = userrepo.findByUsername(username);
		if (user != null) {
			if (user.getPassword().equals(password)) {
				return true;
			}
		}
		return false;
	}

	@Override
	public User findByUseId(Long userId) {
		return userrepo.findById(userId).get();
	}
}
