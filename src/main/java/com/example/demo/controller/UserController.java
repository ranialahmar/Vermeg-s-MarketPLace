package com.example.demo.controller;


import com.example.demo.model.Role;
import com.example.demo.model.RefUsr_Role;
import com.example.demo.model.Users;
import com.example.demo.repository.RefRepository;
import com.example.demo.repository.RoleRepository;
import com.example.demo.repository.RefRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import com.example.demo.repository.UsersRepository;

import javax.validation.Valid;
import java.util.*;
import java.util.stream.Collectors;


@RestController
@RequestMapping(value="/users")
public class UserController {

    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private RefRepository refRepository;

    @GetMapping(value ="/email/{email}")
    @ResponseBody
    public ResponseEntity<Optional<Users>> getUser(@PathVariable String email) {
        List<Users> userL=usersRepository.findAll();
       Optional<Users> p = userL.stream().filter(prod ->email.equals(prod.getEmail())).findAny();
        return ResponseEntity.ok()
                .body(p);


    }
    @GetMapping(value ="/allUsers")
    public List<Users> getAllUs()
    {

        return  usersRepository.findAll();

    }

    @GetMapping(value ="/User/{id}")
    @ResponseBody
    public Users getUser(@PathVariable Long id) {
        Users userL = usersRepository.findUsersById(id);
        if (userL != null) {
            return userL;}
        else {
            return new Users();}
    }




    @PostMapping(value={"/add"})
    public String AddUsers(@RequestBody final Users users ,@RequestParam Long role_id){
        RefUsr_Role usrrole=new RefUsr_Role();

        Role role=roleRepository.findRolesById(role_id);
        /*if( new BCryptPasswordEncoder().matches(users.getPassword(),new BCryptPasswordEncoder().encode(users.getPassword()))){
            System.out.println("done");
        }*/
        if(role != null ){
        users.setRole(role);
       //System.out.println(new BCryptPasswordEncoder().encode(users.getPassword()));
            String encpwd= new BCryptPasswordEncoder().encode(users.getPassword());
        users.setPassword( encpwd);
        users.setPasswordConfirm( encpwd);
        usrrole.setUsr(users);
        usrrole.setRol(role);
        usersRepository.save(users);
        refRepository.save(usrrole);

        return "user added successfully ";
        }
        else
            {
            return"verify your informations ";
        }


    }


    @DeleteMapping("/user/delete/{id}")
    public String delete(@PathVariable Long id ){
        Users user = usersRepository.findUsersById(id);
        usersRepository.delete(user);
        return "deleted";

    }




    @PutMapping("/user/update/{id}")
    public ResponseEntity<Users> update(@PathVariable Long id , @Valid @RequestBody Users prod , @RequestParam Long role_id){

        Role role=roleRepository.findRolesById(role_id);
        Users user = usersRepository.findUsersById(id);
        user.setEmail(prod.getEmail());
        user.setCity(prod.getCity());
        user.setComments(prod.getComments());
        user.setCompanyName(prod.getCompanyName());
        user.setLinkedinUrl(prod.getLinkedinUrl());
        user.setCountry(prod.getCountry());
        user.setUsername(prod.getUsername());
        user.setPassword(prod.getPassword());
        user.setPosition(prod.getPosition());
        user.setPostalCode(prod.getPostalCode());
        user.setRole(role);
        usersRepository.save(user);
        return ResponseEntity.ok(user);


    }
}



