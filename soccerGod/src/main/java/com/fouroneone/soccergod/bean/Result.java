package com.fouroneone.soccergod.bean;

/**
 * The response json format after login
 */
public class Result<T> {
    private String msg;
    private boolean success;
    private T detail;

    public Result(String msg, boolean success, T detail) {
        this.msg = msg;
        this.success = success;
        this.detail = detail;
    }

    public Result() {
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public T getDetail() {
        return detail;
    }

    public void setDetail(T detail) {
        this.detail = detail;
    }
}
