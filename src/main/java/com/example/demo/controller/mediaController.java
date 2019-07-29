package com.example.demo.controller;


import com.example.demo.model.Product;
import com.example.demo.repository.MediaRepository;
import com.example.demo.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value="/")
@CrossOrigin(value = {"*"},allowCredentials="true",allowedHeaders = {"*"},exposedHeaders = {"Content-Disposition"})
public class mediaController {



    @Autowired
    MediaRepository mediaRepository;

    @Autowired
    ProductRepository productRepository;

    @GetMapping(value = "/media/{prod_id}")
    @ResponseBody
    public String getProduct(@PathVariable Long prod_id) {
        Product p =productRepository.findProductById(prod_id);
        String path=p.getMedia().getFileName();

return path;

    }
}
