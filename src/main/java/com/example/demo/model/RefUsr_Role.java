package com.example.demo.model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Getter
@Setter
@Data
@Table
public class RefUsr_Role implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long refId;

    @ManyToOne
    @JoinColumn(name = "usr_id")
    @JsonBackReference(value="usrusr")
    //@JsonIgnore
    Users usr;

    @ManyToOne
    @JoinColumn(name = "rol_id")
    @JsonBackReference(value="rolrol")
    //@JsonIgnore
    Role rol;

   public RefUsr_Role(){};

   public RefUsr_Role(Users usr, Role role){
       this.usr=usr;
       this.rol=role;
   }

}
