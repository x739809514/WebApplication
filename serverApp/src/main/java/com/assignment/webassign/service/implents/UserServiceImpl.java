package com.assignment.webassign.service.implents;

import com.assignment.webassign.mapper.UserMapper;
import com.assignment.webassign.service.IUserService;
import com.assignment.webassign.toServer.UserMsg;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, UserMsg> implements IUserService {
    @Autowired
    private UserMapper userMapper;

    @Override
    public boolean existsByUsername(String username) {
        return userMapper.countByUsername(username) > 0;
    }

    @Override
    public UserMsg selectByUsername(String username) {
        return userMapper.selectByUsername(username);
    }
}
