package com.example.demo.model;


import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import com.fasterxml.jackson.annotation.*;


import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;


@Entity
@Data
@Getter
@Setter

public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private Long id;
    private String role;

    @OneToMany(mappedBy = "rol")
    @JsonManagedReference(value="rolrol")
    Set<RefUsr_Role> UsrRol;



    @OneToMany(fetch = FetchType.LAZY,mappedBy = "role", cascade = CascadeType.ALL)
    @JsonManagedReference(value="roleref")
    private Set<Users> user=new HashSet<Users>();

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


    public Set<Users> getUsers() {
        return user;
    }

    public void setUsers(Set user) {
        this.user = user;
    }
}

