package com.assignment.webassign.toServer;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@TableName("user_table")
@Data
public class UserMsg {
    private Integer id;
    private String username;
    private String pwd;
    private byte isPrime;
}
