package com.assignment.webclient.toClient;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@TableName("user_table")
@Data
public class UserData {
    private Integer id;
    private String username;
    private String pwd;
    private byte isPrime;
}
