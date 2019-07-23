package com.example.demo.controller;


import com.example.demo.model.*;
import com.example.demo.repository.RefRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.AssertTrue;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value="/")
@CrossOrigin(value = {"*"},allowCredentials="true",allowedHeaders = {"*"}, exposedHeaders = {"Content-Disposition"})
public class RefController {



    @Autowired
    RefRepository refRepository;

    @GetMapping(value = "/reference")
    public
    List<UserRole> getAllref()

    {   Long reff=null;
        Long Uid=null;
        Long Rid=null;
        List nref= new ArrayList();
        List<RefUsr_Role> userL= refRepository.findAll();
        for (RefUsr_Role ref:userL
             ) {
             reff=ref.getRefId();
             Uid =ref.getUsr().getId();
             Rid=ref.getRol().getId();
             UserRole hello=new UserRole(reff,Rid,Uid);
             nref.add(hello);
        }

        return nref;

    }


    @GetMapping(value = "/reference/{id}")
    public  ResponseEntity<ArrayList<Object> > getAdmin(@PathVariable Long id){
        ArrayList<Object> cm = new ArrayList<>();
        List<RefUsr_Role> userL=refRepository.findAll();
        List<RefUsr_Role> p = userL.stream().filter(prod ->id.equals(prod.getRol().getId())).collect(Collectors.toList());;
        for (RefUsr_Role cmt:p){
           cm.add( cmt.getUsr().getId());
        }
         return ResponseEntity.ok()
                .body(cm);


    }
    }

