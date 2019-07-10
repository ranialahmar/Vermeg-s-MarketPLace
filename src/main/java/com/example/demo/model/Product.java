package com.example.demo.model;



import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;


@Entity
@Getter
@Setter

public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String description;
    private String version;
    private String Date_delivary;
    private String Date_update;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id", nullable = false)
    @JsonBackReference(value="categref")
    private Category category;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "file_id")
    @JsonBackReference(value = "mediaref")
    private Media media;

    public Product() {
    }

    public Product(String name, String description,
                   Category category) {
        this.name = name;
        this.description = description;
        this.category = category;
    }


    public Long getId() {

        return id;
    }
    public void setId(Long id){
        this.id=id;

    }

public void setCategory(Category category){
        this.category=category;
}
    public Category getCategory() {
        return category;
    }
    public Media getMedia() {
        return media;
    }
    public void setMedia(Media media){
        this.media=media;
    }

}
