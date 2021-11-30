package com.fouroneone.soccergod.bean;

public class Guess {
    private int gid;
    private String username;
    private int mid;
    private int win;
    private String time;
    private int amount;
    private int hostwin;

    public int getWin() {
        return win;
    }

    public void setWin(int win) {
        this.win = win;
    }

    public int getHostwin() {
        return hostwin;
    }

    public void setHostwin(int hostwin) {
        this.hostwin = hostwin;
    }

    public int getGid() {
        return gid;
    }

    public void setGid(int gid) {
        this.gid = gid;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getMid() {
        return mid;
    }

    public void setMid(int mid) {
        this.mid = mid;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }
}
