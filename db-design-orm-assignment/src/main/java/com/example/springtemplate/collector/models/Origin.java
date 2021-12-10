package com.example.springtemplate.collector.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="origin")
public class Origin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String origin;

    @OneToMany(mappedBy = "origin")
    @JsonIgnore
    private List<Animal> animal;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getOrigin() {
        return origin;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }


    public List<Animal> getAnimal() {
        return animal;
    }

    public void setAnimal(List<Animal> animals) {
        this.animal = animals;
    }


}
