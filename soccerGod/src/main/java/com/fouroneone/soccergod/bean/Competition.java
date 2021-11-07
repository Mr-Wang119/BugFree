package com.fouroneone.soccergod.bean;

public class Competition {
    private int mid;
    private int hostTeamId;
    private int guestTeamId;
    private int hostScore;
    private int guestScore;

    public int getMid() {
        return mid;
    }

    public int getHostTeamId() {
        return hostTeamId;
    }

    public int getGuestTeamId() {
        return guestTeamId;
    }

    public int getHostScore() {
        return hostScore;
    }

    public int getGuestScore() {
        return guestScore;
    }

    public void setMid(int mid) {
        this.mid = mid;
    }

    public void setHostTeamId(int hostTeamId) {
        this.hostTeamId = hostTeamId;
    }

    public void setGuestTeamId(int guestTeamId) {
        this.guestTeamId = guestTeamId;
    }

    public void setHostScore(int hostScore) {
        this.hostScore = hostScore;
    }

    public void setGuestScore(int guestScore) {
        this.guestScore = guestScore;
    }
}
