package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;


import java.io.Serializable;
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Data
public class UserRole implements Serializable {

    private Long ref_id;
    private Long role_id;
    private Long user_id;
    public UserRole(Long ref_id,Long rid , Long uid){
        this.ref_id=ref_id;
        this.role_id=rid;
        this.user_id=uid;
    }
}
