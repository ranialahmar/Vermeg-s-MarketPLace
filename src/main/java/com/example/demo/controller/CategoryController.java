package com.example.demo.controller;


import com.example.demo.model.Category;
import com.example.demo.model.Product;
import com.example.demo.model.Users;
import com.example.demo.repository.CategoryRepository;
import com.example.demo.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value="/")
@CrossOrigin(value = {"*"}, exposedHeaders = {"Content-Disposition"})
public class CategoryController {


    @Autowired
    CategoryRepository categoryRepository;
    @Autowired
    ProductRepository productRepository;

    @GetMapping(value = "/categories")
    public List<Category> getAllcomm() {
        return categoryRepository.findAll();
    }


}
