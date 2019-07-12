package com.example.demo;


import com.example.demo.controller.UserController;
import com.example.demo.model.Users;
import com.example.demo.repository.UsersRepository;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.junit.Assert.assertEquals;

public class MockitoControllerTest {


    @InjectMocks
    private UserController userController;

    @Mock
    UsersRepository usersRepository;

    @Before
    public void init(){
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testGetUserById() {
        Users u = new Users();
        u.setId(9L);
        when(usersRepository.findUsersById(9l)).thenReturn(u);
        Users user = userController.getUser(9L);
        verify(usersRepository).findUsersById(9L);
        assertEquals(9L, user.getId().longValue());
        System.out.println("verified");


    }
}
