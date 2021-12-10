package com.example.springtemplate.collector.repositories;

import com.example.springtemplate.collector.models.Animal;
import org.springframework.data.repository.CrudRepository;


public interface AnimalRepository
        extends CrudRepository<Animal, Integer> {
}