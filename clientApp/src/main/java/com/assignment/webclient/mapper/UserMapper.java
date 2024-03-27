package com.assignment.webclient.mapper;

import com.assignment.webclient.toClient.UserData;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;

public interface UserMapper extends BaseMapper<UserData> {
    UserData selectByUsername(String username);
    int countByUsername(String username);
}
