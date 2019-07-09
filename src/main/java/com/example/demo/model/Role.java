package com.example.demo.model;


import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.aspectj.apache.bcel.classfile.Code;


import javax.persistence.*;


@Entity
@Data
@Getter
@Setter

public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private Long id;
    private String role;



 Role(){};

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }


   /* public Set<Users> getUsers() {
        return users;
    }

    public void setUsers(Set users) {
        this.users = users;
    }*/
}

