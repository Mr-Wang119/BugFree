package com.fouroneone.soccergod.bean;

public class Competition {
    private int mid;
    private String name;
    private String time;
    private String location;
    private int pondAmount;
    private int finish;

    public int getMid() {
        return mid;
    }

    public void setMid(int mid) {
        this.mid = mid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public int getPondAmount() {
        return pondAmount;
    }

    public void setPondAmount(int pondAmount) {
        this.pondAmount = pondAmount;
    }

    public int getFinish() {
        return finish;
    }

    public void setFinish(int finish) {
        this.finish = finish;
    }
}
