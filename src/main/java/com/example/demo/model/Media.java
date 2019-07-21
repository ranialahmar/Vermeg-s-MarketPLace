package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;


@Entity
@Getter
@Setter
@Data
public class Media  implements Serializable {
    @Id
    @GeneratedValue
    private Long id;
    private String fileName;
    private String contentType;
    private String Filepath;


    @OneToMany(fetch = FetchType.LAZY,mappedBy = "media", cascade = CascadeType.ALL)
    @JsonManagedReference(value = "mediaref")
    //@JsonIgnore
    private Set<Product> product=new HashSet<Product>();

    @Lob
    private byte[] data;


    public Media(){}
    public Media(String fileName,String contentType,byte[] data){
        this.fileName=fileName;
        this.contentType=contentType;
        this.data=data;
    }
    public Media(String fileName,String contentType,byte[] data,String Filepath){
        this.fileName=fileName;
        this.contentType=contentType;
        this.data=data;
        this.Filepath=Filepath;

    }
    public String getContentType()
    {
        return contentType;
    }
    public byte[] getData(){
        return data;
    }
    public String getFileName(){
        return fileName;
    }
    public String getFilepath(){
        return Filepath;
    }

    public Set<Product> getProducts() {
        return product;
    }

}