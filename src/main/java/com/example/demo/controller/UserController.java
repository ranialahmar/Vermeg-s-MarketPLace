package com.example.demo.controller;


import com.example.demo.model.Role;
import com.example.demo.model.Users;
import com.example.demo.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.demo.repository.UsersRepository;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;



@RestController
@RequestMapping(value="/users")
public class UserController {

    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private RoleRepository roleRepository;

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
        return usersRepository.findAll();
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

        Role role=roleRepository.findRolesById(role_id);
        if(role != null){
        users.setRole(role);
        usersRepository.save(users);
        return "user added successfully ";
        }
        else
            {
            return"User must be admin or Client ";
        }


    }


    @DeleteMapping("/user/delete/{id}")
    public String delete(@PathVariable Long id ){
        Users user = usersRepository.findUsersById(id);
        usersRepository.delete(user);
        return "deleted";

    }




    @PutMapping("/prod/update/{id}")
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



