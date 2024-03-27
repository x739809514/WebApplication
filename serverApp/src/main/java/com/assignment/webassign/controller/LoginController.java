package com.assignment.webassign.controller;

import com.assignment.webassign.service.IUserService;
import com.assignment.webassign.toClient.Result;
import com.assignment.webassign.toServer.UserMsg;
import com.mysql.cj.log.Log;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@Slf4j
@RequestMapping("/")
public class LoginController {
    @Autowired
    private IUserService userService;

    @PostMapping("addUser")
    public Result AddUser(@RequestBody UserMsg user) {
        log.info("User is: {}", user);

        if (!userService.existsByUsername(user.getUsername())) {
            userService.save(user);
            return Result.success();
        }else{
            return Result.failure("Username is existing");
        }
    }

    @PostMapping("/searchUser/{username}/{password}")
    public Result SearchUser(@PathVariable String username, @PathVariable String password){
        if (!userService.existsByUsername(username)){
            return Result.failure("No such user");
        }else {
            UserMsg user = userService.selectByUsername(username);
            if(password.equals(user.getPwd())){
                return Result.success(user);
            }else {
                return Result.failure("Password is wrong");
            }
        }
    }

    @PutMapping("editUser")
    public Result ModifyPwd(@RequestBody UserMsg user) {
        log.info("msg is {}", user);

        if (!userService.existsByUsername(user.getUsername())){
            return Result.failure("There's no this user");
        }

        UserMsg old = userService.selectByUsername(user.getUsername());
        old.setUsername(user.getUsername());
        userService.updateById(old);
        return Result.success();
    }

    @DeleteMapping("deleteUser/{id}")
    public Result Delete(@PathVariable int id) {
        log.info("Id is {}", id);

        userService.removeById(id);
        return Result.success();
    }
}
