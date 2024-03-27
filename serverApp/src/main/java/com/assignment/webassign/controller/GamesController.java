package com.assignment.webassign.controller;

import com.assignment.webassign.service.IGameService;
import com.assignment.webassign.toClient.Result;
import com.assignment.webassign.toServer.GamesMsg;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@Slf4j
@RequestMapping("/")
public class GamesController {
    @Autowired
    private IGameService gameService;

    @PostMapping("addGames")
    public Result AddGames(@RequestBody GamesMsg msg) {
        log.info("game is {}", msg);

        //json
//        Gson gson = new Gson();
//        GamesMsg[] game = gson.fromJson(msg, GamesMsg[].class);
//
//        String json = gson.toJson(game);
//        log.info("game is {}", json);
//
//        try (FileWriter writer = new FileWriter("../games.json")) {
//            writer.write(json);
//            writer.flush();
//            System.out.println("Data has been saved in games.json");
//        } catch (IOException e) {
//            e.printStackTrace();
//        }

//        DataBase
        gameService.save(msg);

//        send back to client
        return Result.success(msg);
    }

    @PutMapping("edit/{id}")
    public Result Modify(@RequestBody GamesMsg msg, @PathVariable int id) {
        log.info("msg is {}", msg);

        msg.setId(id);
        gameService.updateById(msg);
        return Result.success();
    }

    @DeleteMapping("delete/{id}")
    public Result Delete(@PathVariable int id) {
        log.info("Id is {}", id);

        gameService.removeById(id);
        return Result.success();
    }
}
