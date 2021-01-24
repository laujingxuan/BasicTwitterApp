package com.example.backend.repo;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.backend.model.Tweet;

public interface TweetRepository extends JpaRepository<Tweet, Long> {
	@Query("SELECT t FROM Tweet t")
	List<Tweet> findAllAndSort(Sort sort);
}
