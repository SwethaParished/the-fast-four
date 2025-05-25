package com.fastfour.pathfinderbackend.model;

import jakarta.persistence.*;


@Entity
@Table(name = "hike_table")
public class HikeTable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long hikeId;

    public HikeTable(Long hikeId) {
        this.hikeId = hikeId;
    }
    // @Column(name = "user_id")
    // Long userId;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private String trailName;
    private String areaName;
    private String walkable;
    private String bikeFriendly;
    private String distance;
    private String date;

    public HikeTable() {
    }

    public HikeTable(Long hikeId, User user, String trailName, String areaName, String walkable, String bikeFriendly, String distance, String date) {
        this.hikeId = hikeId;
        this.user = user;
        this.trailName = trailName;
        this.areaName = areaName;
        this.walkable = walkable;
        this.bikeFriendly = bikeFriendly;
        this.distance = distance;
        this.date = date;
    }

    public Long getHikeId() {
        return hikeId;
    }


    public String getTrailName() {
        return trailName;
    }

    public void setTrailName(String trailName) {
        this.trailName = trailName;
    }

    public String getAreaName() {
        return areaName;
    }

    public void setAreaName(String areaName) {
        this.areaName = areaName;
    }

    public String getWalkable() {
        return walkable;
    }

    public void setWalkable(String walkable) {
        this.walkable = walkable;
    }

    public String getBikeFriendly() {
        return bikeFriendly;
    }

    public void setBikeFriendly(String bikeFriendly) {
        this.bikeFriendly = bikeFriendly;
    }

    public String getDistance() {
        return distance;
    }

    public void setDistance(String distance) {
        this.distance = distance;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
    


}