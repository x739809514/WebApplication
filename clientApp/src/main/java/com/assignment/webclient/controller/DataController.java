package com.assignment.webclient.controller;

import com.assignment.webclient.service.IGameDataService;
import com.assignment.webclient.toClient.GamesData;
import com.assignment.webclient.toClient.Result;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.*;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@Slf4j
@RequestMapping("/")
public class DataController {
    @Autowired
    private IGameDataService gameService;

    @GetMapping("index")
    public Result list(@RequestParam(defaultValue = "1") int pageNum, @RequestParam(defaultValue = "30") int pageSize) throws IOException {
        log.info("pageNum is {} and pageSize is {}", pageNum, pageSize);

        Page<GamesData> page = new Page<GamesData>(pageNum, pageSize);
        IPage<GamesData> pageResult = gameService.page(page);

// json
//        List<GamesData> games = readUsersFromJsonFile("../games.json");

        return Result.success(pageResult);
    }

// json
//    private List<GamesData> readUsersFromJsonFile(String filename) throws IOException {
//        if (!Files.exists(Paths.get(filename))) {
//            try (FileWriter writer = new FileWriter(filename)) {
//                writer.write("[]");
//            }
//        }
//
//        try (BufferedReader reader = new BufferedReader(new FileReader(filename))) {
//            Gson gson = new Gson();
//
//            Type userListType = new TypeToken<List<GamesData>>() {}.getType();
//            return gson.fromJson(reader, userListType);
//        }
//    }
}
