package com.assignment.webassign.service;

import com.assignment.webassign.toServer.UserMsg;
import com.baomidou.mybatisplus.extension.service.IService;

public interface IUserService extends IService<UserMsg> {
    boolean existsByUsername(String username);

    UserMsg selectByUsername(String username);
}
