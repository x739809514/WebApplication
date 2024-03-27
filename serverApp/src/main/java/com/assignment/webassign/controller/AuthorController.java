package com.assignment.webassign.controller;

import com.assignment.webassign.service.IAuthorService;
import com.assignment.webassign.toClient.Result;
import com.assignment.webassign.toServer.AuthorMsg;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@Slf4j
@RequestMapping("/")
public class AuthorController {
    @Autowired
    private IAuthorService authorService;

    @PostMapping("addAuthor")
    public Result AddAuthor(@RequestBody AuthorMsg msg) {
        log.info("author is {}", msg);

        //json
//        Gson gson = new Gson();
//        AuthorMsg[] author = gson.fromJson(msg, AuthorMsg[].class);
//
//        String json = gson.toJson(author);
//
//        try (FileWriter writer = new FileWriter("../author.json")) {
//            writer.write(json);
//            writer.flush();
//            System.out.println("Data has been saved in author.json");
//        } catch (IOException e) {
//            e.printStackTrace();
//        }

//        DataBase
        authorService.save(msg);
        return Result.success(msg);
    }
}
