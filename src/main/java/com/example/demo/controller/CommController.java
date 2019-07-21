package com.example.demo.controller;


import com.example.demo.model.*;
import com.example.demo.repository.CommRepository;
import com.example.demo.repository.ProductRepository;
import com.example.demo.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping(value="/")
@CrossOrigin(value = {"*"}, exposedHeaders = {"Content-Disposition"})
public class CommController {



    @Autowired
    CommRepository commRepository;

    @Autowired
    UsersRepository usersRepository;

    @Autowired
    ProductRepository productRepository;


    @GetMapping(value = "/comments")
    public List<Comment> getAllcomm() {
        return commRepository.findAll();
    }



    @GetMapping(value ="/comment/{id_user}")
    @ResponseBody
    public   ArrayList<Object>getUser(@PathVariable Long id_user) {
        ArrayList<Object> com = new ArrayList<>();
        List<Comment> userll = commRepository.findAll();
        for (Comment c : userll) {
            if (c.getUsers().getId() == id_user) {
                ArrayList<Object> co = new ArrayList<>();
                co.add(c.getComment());
                co.add(c.getDate());
                co.add( c.getProdd().getId());
                com.add(co);
            }
        }
        return (com);
    }

    @GetMapping(value ="/comment/{idp}")
    @ResponseBody
    public  ArrayList<Object> getComm(@PathVariable Long idp) {
        List<Comment> comm=commRepository.findAll();
        ArrayList<Object> cmment = new ArrayList<>();
        for (Comment cmt:comm){
            if (cmt.getProdd().getId()==idp){
                ArrayList<Object> cm = new ArrayList<>();
                cm.add(cmt.getComment());
                cm.add(cmt.getDate());
                cm.add(cmt.getUsers().getId());
                cmment.add(cm);
            }

        }
    return(cmment);

    }


    @PostMapping(value = "/comment")
    public String AddComm(@RequestBody final Comment commentt , @RequestParam Long user_id, @RequestParam Long prod_id) {


        Users usr=usersRepository.findUsersById(user_id);
        Product prod=productRepository.findProductById(prod_id);
        if(usr != null && prod != null){
           commentt.setUsers(usr);
            commentt.setProdd(prod);
            commRepository.save(commentt);
            return "comment added successfully ";
        }
        else{
            return "comment not able to be added!  ";
        }

    }

    @DeleteMapping("/comment/{idc}")
    public String delete(@PathVariable Long idc){
        Comment comm = commRepository.findCommentsById(idc);
        commRepository.delete(comm);
        return "comment deleted";

    }




}
