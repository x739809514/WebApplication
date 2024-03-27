package com.assignment.webassign.toServer;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@TableName("author_table")
@Data
public class AuthorMsg {
    private int id;
    private String birthday;
    private String name;
    private String sex;
    private int age;
}
