package com.example.demo.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;



import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;


@Entity
@Data
@Getter
@Setter
public class Users implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private Long id;
    private String Username;
    private String Position;
    private String LinkedinUrl;
    private String CompanyName;
    private String Country ;
    private String City ;
    private Long PostalCode ;
    private String Email;
    private  String Password ;
    private String PasswordConfirm;

    @OneToMany(cascade=CascadeType.ALL)
    @JoinTable(name="User_Role", joinColumns={@JoinColumn(name="User_ID", referencedColumnName="id")}
            , inverseJoinColumns={@JoinColumn(name="Role_ID", referencedColumnName="id")})
    private Set<Role> roles;

    @OneToMany(fetch = FetchType.LAZY,mappedBy = "users", cascade = CascadeType.ALL)
    private Set<Comment> comments=new HashSet<Comment>();





    public Users( String Username,
           String Position,
            String LinkedinUrl,
           String CompanyName,
            String Country ,
           String City ,
             Long PostalCode ,
           String Email,
            String Password ,
             String PasswordConfirm, Long user_id){
        this.Username=Username;
        this.Position=Position;  this.LinkedinUrl=LinkedinUrl;  this.CompanyName=CompanyName;  this.Country=Country;  this.City=City;
        this.PostalCode=PostalCode;   this.Email=Email;   this.Password=Password;


    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return Username;
    }

    public void setUsername(String username) {
        this.Username = username;
    }

    public void setPosition(String Position){
        this.Position=Position;
    }
     public String getPosition(){
        return this.Position;
     }

    public void setLinkedin(String LinkUrl)
    {
        this.LinkedinUrl=LinkUrl;
    }
    public String getLinkUrl(){
        return this.LinkedinUrl;
    }

    public void setCompanyName(String CompanyName){
        this.CompanyName=CompanyName;
    }
    public String getCompanyName(){
        return this.CompanyName;
    }
    public void setCity(String City){
        this.City=City;
    }
    public String getCity(){
        return this.City;
    }

    public void setCountry(String Country){
        this.Country=Country;
    }
    public String getCountry(){
        return this.Country;
    }

    public void setPostCode(Long PostCode){
        this.PostalCode=PostCode;
    }
    public Long getPostCode(){
        return this.PostalCode;
    }

    public void setEmail(String Email){
        this.Email=Email;
    }
    public String getEmail(){
        return this.Email;
    }


    public void setPassword(String password) {
        this.Password = password;
    }

    public String getPassword() {
        return Password;
    }

    @Transient
    public String getPasswordConfirm() {
        return PasswordConfirm;
    }

    public void setPasswordConfirm(String passwordConfirm) {
        this.PasswordConfirm = passwordConfirm;
    }


    public Set<Comment> getComments() {
        return comments;
    }
}