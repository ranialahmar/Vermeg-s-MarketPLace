package com.example.demo.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import java.util.List;
import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@Data
public class Category {
    @Id
    @Column(name = "CATEGORY_ID")
    @GeneratedValue
    private Long id;
    private String name;


    @OneToMany(fetch = FetchType.LAZY,mappedBy = "category", cascade = CascadeType.ALL)
    @JsonManagedReference(value="categref")
        private List<Product> products;

    public Category() {
    }

    public Category(String name) {
        this.name = name;
    }
    public void setId(Long id){
        this.id=id;

    }

    public Long getId() {
        return id;
    }


    public List<Product> getProducts() {
        return products;
    }

}
