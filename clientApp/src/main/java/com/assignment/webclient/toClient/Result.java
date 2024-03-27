package com.assignment.webclient.toClient;

public class Result<T> {
    public int code;
    public String msg;
    public T data;

    private Result(int code,String msg, T data){
        this.code = code;
        this.msg = msg;
        this.data = data;
    }

    public static <T> Result success() {
        Result r = new Result<>(0,"suc",null);
        return r;
    }

    public static <T> Result success(T data) {
        Result r = new Result<>(0,"suc",data);
        return r;
    }

    public static <T> Result failure(String failMsg){
        Result r = new Result<>(0,failMsg,null);
        return r;
    }
}
