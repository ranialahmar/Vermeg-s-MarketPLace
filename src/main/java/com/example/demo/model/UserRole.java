package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;


import java.io.Serializable;
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Data
public class UserRole implements Serializable {

    private Long role_id;
    private Long user_id;
    public UserRole(Long rid , Long uid){
        this.role_id=rid;
        this.user_id=uid;
    }
}
