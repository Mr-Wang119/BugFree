package com.fouroneone.soccergod.bean;

public class Player {
    private int pid;
    private String shortName;
    private String longName;
    private String  position;
    private String image;
    private String birthday;
    private int height;
    private int weight;
    private String nationality;
    private int pace;
    private int shooting;
    private int passing;
    private int dribbling;
    private int defending;
    private int physic;
    private int gkDiving;
    private int gkHandling;
    private int gkReflexes;
    private int gkSpeed;
    private int gkPosition;
    private String image_url;

    public int getPid() {
        return pid;
    }

    public String getShortName() {
        return shortName;
    }

    public String getLongName() {
        return longName;
    }

    public String getPosition() {
        return position;
    }

    public String getImage() {
        return image;
    }

    public String getBirthday() {
        return birthday;
    }

    public int getHeight() {
        return height;
    }

    public int getWeight() {
        return weight;
    }

    public String getNationality() {
        return nationality;
    }

    public int getPace() {
        return pace;
    }

    public int getShooting() {
        return shooting;
    }

    public int getPassing() {
        return passing;
    }

    public int getDribbling() {
        return dribbling;
    }

    public int getDefending() {
        return defending;
    }

    public int getPhysic() {
        return physic;
    }

    public int getGkDiving() {
        return gkDiving;
    }

    public int getGkHandling() {
        return gkHandling;
    }

    public int getGkReflexes() {
        return gkReflexes;
    }

    public int getGkSpeed() {
        return gkSpeed;
    }

    public int getGkPosition() {
        return gkPosition;
    }

    public String getImage_url() {
        return image_url;
    }

//    setter

    public void setPid(int pid) {
        this.pid = pid;
    }

    public void setShortName(String shortName) {
        this.shortName = shortName;
    }

    public void setLongName(String longName) {
        this.longName = longName;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public void setPace(int pace) {
        this.pace = pace;
    }

    public void setShooting(int shooting) {
        this.shooting = shooting;
    }

    public void setPassing(int passing) {
        this.passing = passing;
    }

    public void setDribbling(int dribbling) {
        this.dribbling = dribbling;
    }

    public void setDefending(int defending) {
        this.defending = defending;
    }

    public void setPhysic(int physic) {
        this.physic = physic;
    }

    public void setGkDiving(int gkDiving) {
        this.gkDiving = gkDiving;
    }

    public void setGkHandling(int gkHandling) {
        this.gkHandling = gkHandling;
    }

    public void setGkReflexes(int gkReflexes) {
        this.gkReflexes = gkReflexes;
    }

    public void setGkSpeed(int gkSpeed) {
        this.gkSpeed = gkSpeed;
    }

    public void setGkPosition(int gkPosition) {
        this.gkPosition = gkPosition;
    }

    public void setImage_url(String image_url) {
        this.image_url = image_url;
    }

    @Override
    public String toString() {
        return "Player{" +
                "pid=" + pid +
                ", shortName='" + shortName + '\'' +
                ", longName='" + longName + '\'' +
                ", position='" + position + '\'' +
                ", image='" + image + '\'' +
                ", birthday='" + birthday + '\'' +
                ", height=" + height +
                ", weight=" + weight +
                ", nationality='" + nationality + '\'' +
                ", pace=" + pace +
                ", shooting=" + shooting +
                ", passing=" + passing +
                ", dribbling=" + dribbling +
                ", defending=" + defending +
                ", physic=" + physic +
                ", gkDiving=" + gkDiving +
                ", gkHandling=" + gkHandling +
                ", gkReflexes=" + gkReflexes +
                ", gkSpeed=" + gkSpeed +
                ", gkPosition=" + gkPosition +
                ", image_url='" + image_url + '\'' +
                '}';
    }
}
