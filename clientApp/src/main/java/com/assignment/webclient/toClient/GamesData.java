package com.assignment.webclient.toClient;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@TableName("gameDetail_table")
@Data
public class GamesData {
    private Integer id;
    private String gameTitle;
    private String gameDetail;
    private String gamePlay;
    private float price;
    private String gameLabel;
    private String picName;
    private int authorId;
}
