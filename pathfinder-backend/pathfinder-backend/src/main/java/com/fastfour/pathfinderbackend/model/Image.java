package com.fastfour.pathfinderbackend.model;

import jakarta.persistence.*;

@Entity
public class Image {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        private String fileName;

        @Lob
        @Column(columnDefinition = "LONGBLOB") // or BYTEA for PostgreSQL
        private byte[] data;

        // Getters and setters


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public byte[] getData() {
        return data;
    }

    public void setData(byte[] data) {
        this.data = data;
    }
}
