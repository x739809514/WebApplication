package com.assignment.webclient.service.Implents;

import com.assignment.webclient.mapper.GameDataMapper;
import com.assignment.webclient.service.IGameDataService;
import com.assignment.webclient.toClient.GamesData;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

@Service
public class GameDataServiceImpl extends ServiceImpl<GameDataMapper, GamesData> implements IGameDataService {

}
