package com.example.demo.model;



import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;


@Entity
@Getter
@Setter
public class Product {
    @Id
    @Column(name = "PRODUCT_ID")
    @GeneratedValue
    private Long id;
    private String name;
    private String description;
    private Long version;
    private String Date_delivary;
    private String Date_update;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "file_id", nullable = false)
    private Media media;

    public Product() {
    }

    public Product(String name, String description,
                   Category category) {
        this.name = name;
        this.description = description;
        this.category = category;
    }


    public long getId() {
        return id;
    }
    public void setId(Long id){
        this.id=id;

    }


    public Category getCategory() {
        return category;
    }
    public Media getMedia() {
        return media;
    }

}
