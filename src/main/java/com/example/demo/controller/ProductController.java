package com.example.demo.controller;

import com.example.demo.model.Category;
import com.example.demo.model.Media;
import com.example.demo.model.Product;
import com.example.demo.repository.CategoryRepository;
import com.example.demo.repository.MediaRepository;
import com.example.demo.repository.ProductRepository;
import com.example.demo.repository.UsersRepository;
//import com.example.demo.repository.fileEntityRepository;
//import com.google.gson.JsonArray;
import com.oracle.webservices.internal.api.message.ContentType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.configurationprocessor.json.JSONArray;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

import javax.validation.Valid;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


@RestController
@RequestMapping(value="/products")
@CrossOrigin(value = {"*"}, exposedHeaders = {"Content-Disposition"})


public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryRepository categoryRepository;


    @Autowired
    private MediaRepository mediaRepository;




    @GetMapping(value = "/allProducts")
    public List<Product> getAllProd() {
        return productRepository.findAll();
    }



    @GetMapping(value = "/prod/{Prod_id}")
    @ResponseBody
    public ResponseEntity<Object> getProduct(@PathVariable Long Prod_id) {
        Product ProdL = productRepository.findProductById(Prod_id);
        if (ProdL != null) {
            return ResponseEntity.ok()
                    .body(ProdL);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Product was not fount");
        }

    }


    @GetMapping(value ={ "/CategoryId/{Cat_id}"})
    @ResponseBody
    public ResponseEntity<Object> getProd(@PathVariable Long Cat_id) {
        List<Product> prodcat = productRepository.findAll();
        List<Product> p = prodcat.stream().filter(prod -> prod.getCategory().getId() == Cat_id).collect(Collectors.toList());
        return ResponseEntity.ok()
                .body(p);
    }





    @PostMapping(value = "/addProd")
    public String AddProds(@RequestBody final Product product ,@RequestParam Long category_id,@RequestParam Long file_id) {

        Category category=categoryRepository.findCategoriesById(category_id);
        Media mediaa=mediaRepository.findMediaById(file_id);
        if(category != null && mediaa != null){
            product.setCategory(category);
            product.setMedia(mediaa);
            productRepository.save(product);
            return "product added successfully ";
        }
       else{
            return "product not able to be added ";
        }

    }

    @DeleteMapping("/prod/delete/{idp}")
    public String delete(@PathVariable Long idp){
        Product prod = productRepository.findProductById(idp);
        productRepository.delete(prod);
        return "deleted";

    }


    @PutMapping("/prod/update/{id}")
    public ResponseEntity<Product> update(@PathVariable Long id ,@Valid @RequestBody Product prod,@RequestParam Long media_id,@RequestParam Long category_id){
        Product product = productRepository.findProductById(id);
        Category category =categoryRepository.findCategoriesById(category_id);
        Media media=mediaRepository.findMediaById(media_id);
        product.setName(prod.getName());
        product.setCategory(category);
        product.setMedia(media);
        product.setDate_delivary(prod.getDate_delivary());
        product.setDescription(prod.getDescription());
        product.setDate_update(prod.getDate_update());
        productRepository.save(product);
        return ResponseEntity.ok(product);


    }

}






