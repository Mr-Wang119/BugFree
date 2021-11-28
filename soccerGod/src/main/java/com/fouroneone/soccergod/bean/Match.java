package com.fouroneone.soccergod.bean;
import java.util.*;
public class Match {
    private int mid;
    private String name;
    private Date time;
    private String location;
    private int pondAmount;

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

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
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

    @Override
    public String toString() {
        return "Match{" +
                "mid=" + mid +
                ", name='" + name + '\'' +
                ", time=" + time +
                ", location='" + location + '\'' +
                ", pondAmount=" + pondAmount +
                '}';
    }
}
