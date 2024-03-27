package com.assignment.webclient.controller;

import com.assignment.webclient.service.IUserDataService;
import com.assignment.webclient.toClient.Result;
import com.assignment.webclient.toClient.UserData;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@Slf4j
@RequestMapping("/")
public class LoginController {

    @Autowired
    private IUserDataService userService;

    @GetMapping("/searchUser/{username}/{password}")
    public void SearchUser(@PathVariable String username, @PathVariable String password){
        if (!userService.existsByUsername(username)){
            Result.failure("No such user");
        }else {
            UserData user = userService.selectByUsername(username);
            if(password.equals(user.getPwd())){
                Result.success("Login Success!");
            }else {
                Result.failure("Password is wrong");
            }
        }
    }
}
