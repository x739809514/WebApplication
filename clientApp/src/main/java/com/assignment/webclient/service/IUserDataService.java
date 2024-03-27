package com.assignment.webclient.service;

import com.assignment.webclient.toClient.UserData;
import com.baomidou.mybatisplus.extension.service.IService;

public interface IUserDataService extends IService<UserData> {
    UserData selectByUsername(String username);

    boolean existsByUsername(String username);
}
