package com.example.demo.model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;


@Entity
@Getter
@Setter
@Data
public class Comment  implements Serializable {
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String comment;
    //@Temporal(TemporalType.TIMESTAMP)
    private String date;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    @JsonBackReference(value="commentref")
   // @JsonIgnore
    private Users users;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id", nullable = false)
    @JsonBackReference(value="commentprod")
    //@JsonIgnore
    private Product prodd;

   public Comment(){}
   public Comment(Users user, String comm){
       this.comment=comm;
       this.setUsers(user);


   }


/*public Comment(String comment, Product p){
        this.prodd=p;
        this.comment=comment;
}

    public Comment(String comment, Date
            date, Long pro){
this.date=date;
        this.comment=comment;
        this.id=pro;
    }
   /*public Comment(Product prodd , Users user){this.users=user;
    this.prodd=prodd;}

    public void setProd(Product prod){
        this.prodd=prod;
    }
    public Product getProd(){
        return this.prodd;
    }
/*
    public void setUser(Users user){
        this.users=user;
    }

 */
public String getComment(){
    return this.comment;
}
    public Users getUsers(){
        return this.users;
    }

}
