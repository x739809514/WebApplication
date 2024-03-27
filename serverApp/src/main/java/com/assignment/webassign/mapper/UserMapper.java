package com.assignment.webassign.mapper;

import com.assignment.webassign.toServer.UserMsg;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Select;

public interface UserMapper extends BaseMapper<UserMsg> {
    //@Select("SELECT COUNT(*) FROM user_table WHERE username = #{username}")
    int countByUsername(String username);

    //@Select("SELECT * FROM user_table WHERE username = #{username}")
    UserMsg selectByUsername(String username);
}
