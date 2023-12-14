package com.fastfour.pathfinderbackend.repository;

import com.fastfour.pathfinderbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
