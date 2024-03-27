package com.assignment.webclient.controller;


import com.assignment.webclient.service.IAuthorDataService;
import com.assignment.webclient.toClient.AuthorData;
import com.assignment.webclient.toClient.Result;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.io.IOException;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@Slf4j
@RequestMapping("/")
public class AuthorController {
    @Autowired
    private IAuthorDataService authorService;

    //database
    @GetMapping("author/{id}")
    public Result Search(@PathVariable int id) throws IOException {
        log.info("id is {}", id);
        AuthorData author = authorService.getById(id);
        return Result.success(author);
    }

    //json
//    @GetMapping("author")
//    public Result GetAuthors() throws IOException {
//        List<AuthorData> author = readUsersFromJsonFile("../author.json");
//        return Result.success(author);
//    }

//    @GetMapping("author/{id}")
//    public Result Search(@PathVariable int id) throws IOException {
//        log.info("id is {}", id);
//        AuthorData author=null;
//        List<AuthorData> authorDataList = readUsersFromJsonFile("../author.json");
//        for (int i = 0; i < authorDataList.size(); i++) {
//            if (authorDataList.get(i).getId()==id){
//                author=authorDataList.get(i);
//                break;
//            }
//        }
//        return Result.success(author);
//    }
//
//    private List<AuthorData> readUsersFromJsonFile(String filename) throws IOException {
//        if (!Files.exists(Paths.get(filename))) {
//            try (FileWriter writer = new FileWriter(filename)) {
//                writer.write("[]");
//            }
//        }
//
//        try (BufferedReader reader = new BufferedReader(new FileReader(filename))) {
//            Gson gson = new Gson();
//
//            Type userListType = new TypeToken<List<AuthorData>>() {
//            }.getType();
//            return gson.fromJson(reader, userListType);
//        }
//    }
}
