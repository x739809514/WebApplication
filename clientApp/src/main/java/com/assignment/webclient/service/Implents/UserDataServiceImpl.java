package com.assignment.webclient.service.Implents;

import com.assignment.webclient.mapper.UserMapper;
import com.assignment.webclient.service.IUserDataService;
import com.assignment.webclient.toClient.UserData;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserDataServiceImpl extends ServiceImpl<UserMapper, UserData> implements IUserDataService {

    @Autowired
    private UserMapper userMapper;
    @Override
    public UserData selectByUsername(String username) {
        return userMapper.selectByUsername(username);
    }

    @Override
    public boolean existsByUsername(String username) {
        return userMapper.countByUsername(username)>0;
    }
}
