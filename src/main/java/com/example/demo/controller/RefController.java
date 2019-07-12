package com.example.demo.controller;


import com.example.demo.model.RefUsr_Role;
import com.example.demo.model.Role;
import com.example.demo.model.UserRole;
import com.example.demo.model.Users;
import com.example.demo.repository.RefRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.constraints.AssertTrue;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value="/reference")
public class RefController {



    @Autowired
    RefRepository refRepository;

    @GetMapping
    public
    List<UserRole> getAllref()

    {   Long Uid=null;
        Long Rid=null;
        List nref= new ArrayList();
        List<RefUsr_Role> userL= refRepository.findAll();
        for (RefUsr_Role ref:userL
             ) {

             Uid =ref.getUsr().getId();
             Rid=ref.getRol().getId();
             UserRole hello=new UserRole(Rid,Uid);
             nref.add(hello);
        }

        return nref;

    }
}
