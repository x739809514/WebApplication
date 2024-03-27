package com.assignment.webclient.toClient;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@TableName("author_table")
@Data
public class AuthorData {
    private int id;
    private String birthday;
    private String name;
    private String sex;
    private int age;
}
