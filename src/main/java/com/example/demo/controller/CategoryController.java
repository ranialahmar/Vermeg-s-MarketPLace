package com.example.demo.controller;


import com.example.demo.model.Category;
import com.example.demo.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value="/categories")
public class CategoryController {


    @Autowired
    CategoryRepository categoryRepository;

    @GetMapping
    public List<Category> getAllcomm() {
        return categoryRepository.findAll();
    }
}
