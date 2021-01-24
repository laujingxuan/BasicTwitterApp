package com.example.backend.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.backend.model.Tweet;
import com.example.backend.repo.TweetRepository;

@Service
@Transactional
public class TweetServiceImp implements TweetService {

	@Autowired
	TweetRepository tweetrepo;
	
	@Override
	public void deleteById(Long id) {
		tweetrepo.deleteById(id);
	}

	@Override
	public Tweet saveTweet(Tweet tweet) {
		return tweetrepo.save(tweet);
	}

	@Override
	public List<Tweet> listAllTweet() {
		return tweetrepo.findAllAndSort((Sort.by(Sort.Direction.DESC,"timeStamp")));
	}
}
