package com.kitchen;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface Repository extends JpaRepository<User, Long>{
    public List<User> findByname(String name);
}


