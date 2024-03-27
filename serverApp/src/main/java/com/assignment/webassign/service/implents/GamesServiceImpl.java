package com.assignment.webassign.service.implents;

import com.assignment.webassign.mapper.GameMapper;
import com.assignment.webassign.service.IGameService;
import com.assignment.webassign.toServer.GamesMsg;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

@Service
public class GamesServiceImpl extends ServiceImpl<GameMapper, GamesMsg> implements IGameService {

}
