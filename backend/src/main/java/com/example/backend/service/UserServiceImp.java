package com.example.backend.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.Tweet;
import com.example.backend.model.User;
import com.example.backend.repo.UserRepository;

@Service
@Transactional
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
	public boolean loginValidation(User checkUser) {
		User user = userrepo.findByUsername(checkUser.getUsername());
		if (user != null) {
			if (user.getPassword().equals(checkUser.getPassword())) {
				return true;
			}
		}
		return false;
	}

	@Override
	public User findByUseId(Long userId) {
		return userrepo.findById(userId).get();
	}

	@Override
	public User saveUser(User user) {
		return userrepo.save(user);
	}
}
