package com.example.backend.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;


@Entity
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
	@Column(unique=true)
    @Size(min=2,max=30)
    private String username;
	@NotEmpty
	@Size(min=2,max=30)
	private String password;
	
	@OneToMany(mappedBy = "user")
	private List<Tweet> tweets;
	
	public User() {
		super();
	}
	
	public User(String userName, String password) {
		super();
		this.username = userName;
		this.password = password;
	}

	public long getId() {
		return id;
	}

	public List<Tweet> getTweets() {
		return tweets;
	}

	public String getUsername() {
		return username;
	}
	
	public void setUserName(String userName) {
		this.username = userName;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	@Override
	public String toString() {
		return "User [id=" + id + ", username=" + username + ", password=" + password + "]";
	}
	
}
