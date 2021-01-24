package com.example.backend.repo;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
	public User findByUsername(String username);
}
