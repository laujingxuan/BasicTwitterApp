package com.example.backend.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotEmpty;

@Entity
public class Tweet {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
	
	@ManyToOne(cascade = {CascadeType.ALL})
	private User user;
	
	@NotEmpty
	private String tweet;
	
	//Unix Timestamp
	@NotEmpty
	private long timeStamp;

	public Tweet() {
		super();
	}

	public Tweet(User user, @NotEmpty String tweet, @NotEmpty long timeStamp) {
		super();
		this.user = user;
		this.tweet = tweet;
		this.timeStamp = timeStamp;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getTweet() {
		return tweet;
	}

	public void setTweet(String tweet) {
		this.tweet = tweet;
	}

	public long getId() {
		return id;
	}
	
	public long getTimeStamp() {
		return timeStamp;
	}

	public void setTimeStamp(long timeStamp) {
		this.timeStamp = timeStamp;
	}

	@Override
	public String toString() {
		return "Tweet [id=" + id + ", user=" + user + ", tweet=" + tweet + "]";
	}
	
	
}
