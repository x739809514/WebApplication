package com.assignment.webassign.toServer;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@TableName("gameDetail_table")
@Data
public class GamesMsg {
    private Integer id;
    private String gameTitle;
    private String gameDetail;
    private String gamePlay;
    private float price;
    private String gameLabel;
    private String picName;
    private int authorId;
}
