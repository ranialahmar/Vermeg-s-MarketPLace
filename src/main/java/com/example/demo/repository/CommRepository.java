package com.example.demo.repository;




import com.example.demo.model.Comment;
import com.example.demo.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface
CommRepository extends JpaRepository<Comment, Long> {
    Comment findCommentsById(Long id);

            }
