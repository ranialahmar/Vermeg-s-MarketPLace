package com.example.demo.controller;


import com.example.demo.model.Role;
import com.example.demo.model.RefUsr_Role;
import com.example.demo.model.Users;
import com.example.demo.repository.RefRepository;
import com.example.demo.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import com.example.demo.repository.UsersRepository;

import javax.validation.Valid;
import java.util.*;



@RestController
@RequestMapping(value="/")

@CrossOrigin(value = {"*"},allowCredentials="true",allowedHeaders = {"*"},exposedHeaders = {"Content-Disposition"})
public class UserController {

    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private RefRepository refRepository;


    @GetMapping(value ="/user/{name}")
    @ResponseBody
    public ResponseEntity<Optional<Users>> getUser(@PathVariable  String name) {
        List<Users> userL=usersRepository.findAll();
       Optional<Users> p = userL.stream().filter(prod ->name.equals(prod.getUsername())).findAny();
        return ResponseEntity.ok()
                .body(p);


    }
    @GetMapping(value ="/Users")
    public List<Users> getAllUs()
    {
        List<Users>p=usersRepository.findAll();
        return p;
    }

    @GetMapping(value ="/User/{id}")
    @ResponseBody
    public  ResponseEntity<Users> getUser(@PathVariable Long id) {

        Users userL = usersRepository.findUsersById(id);
        if (userL != null) {
            return ResponseEntity.ok()
                    .body(userL);}
        else {
            return ResponseEntity.ok()
                    .body(new Users());
        }
    }




    @PostMapping(value={"/user/{role_id}"})
    public String AddUsers(@RequestBody final Users users ,@PathVariable Long role_id){
        RefUsr_Role usrrole=new RefUsr_Role();

        Role role=roleRepository.findRolesById(role_id);
        /*if( new BCryptPasswordEncoder().matches(users.getPassword(),new BCryptPasswordEncoder().encode(users.getPassword()))){
            System.out.println("done");
        }*/
        if(role != null ){
        users.setRole(role);
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


    @DeleteMapping("/user/{id}")
    public String delete(@PathVariable Long id ){
        Users user = usersRepository.findUsersById(id);
        usersRepository.delete(user);
        return "user is deleted";

    }




    @PutMapping("/user/{id}")
    public ResponseEntity<Users> update(@PathVariable Long id , @Valid @RequestBody Users usr , @RequestParam Long role_id){

        Role role=roleRepository.findRolesById(role_id);
        Users user = usersRepository.findUsersById(id);
        user.setEmail(usr.getEmail());
        user.setCity(usr.getCity());
        user.setComments(usr.getComments());
        user.setCompanyName(usr.getCompanyName());
        user.setLinkedinUrl(usr.getLinkedinUrl());
        user.setCountry(usr.getCountry());
        user.setUsername(usr.getUsername());
        user.setPassword(usr.getPassword());
        user.setPosition(usr.getPosition());
        user.setPostalCode(usr.getPostalCode());
        user.setRole(role);
        usersRepository.save(user);
        return ResponseEntity.ok(user);


    }
}



