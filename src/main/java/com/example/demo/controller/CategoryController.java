package com.example.demo.controller;


import com.example.demo.model.Category;
import com.example.demo.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value="/")
@CrossOrigin(value = {"*"}, exposedHeaders = {"Content-Disposition"})
public class CategoryController {


    @Autowired
    CategoryRepository categoryRepository;

    @GetMapping(value = "/categories")
    public List<Category> getAllcomm() {
        return categoryRepository.findAll();
    }
}
