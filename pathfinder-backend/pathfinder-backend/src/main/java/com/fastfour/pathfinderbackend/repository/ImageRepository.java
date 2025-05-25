package com.fastfour.pathfinderbackend.repository;

import com.fastfour.pathfinderbackend.model.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<Image, Long> {}
