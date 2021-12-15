package com.example.springtemplate.collector.daos;

import com.example.springtemplate.collector.models.Animal;
import com.example.springtemplate.collector.models.Origin;
import com.example.springtemplate.collector.models.Users;
import com.example.springtemplate.collector.repositories.AnimalRepository;
import com.example.springtemplate.collector.repositories.OriginRepository;
import com.example.springtemplate.collector.repositories.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class AnimalOrmDao {

    @Autowired
    AnimalRepository animalRepository;

    @Autowired
    UsersRepository usersRepository;

    @Autowired
    OriginRepository originRepository;

    @PostMapping("/api/animals")
    public Animal createAnimal(@RequestBody Animal animal) {
        return animalRepository.save(animal);
    }

    @PostMapping("/api/users/{userId}/animals")
    public Animal createAnimalForUser(
            @PathVariable("userId") Integer userId,
            @RequestBody Animal animal) {
        animal.setName("New Animal");
        animal = animalRepository.save(animal);
        Users users = usersRepository.findById(userId).get();
        animal.setUsers(users);
        return animalRepository.save(animal);
    }

    @PostMapping("/api/origin/{originId}/animals")
    public Animal createAnimalForOrigin(
            @PathVariable("originId") Integer originId,
            @RequestBody Animal animal) {
        animal = animalRepository.save(animal);
        Origin origin = originRepository.findById(originId).get();
        animal.setOrigin(origin);
        return animalRepository.save(animal);
    }

    @GetMapping("/api/users/{userId}/animals")
    public List<Animal> findAnimalsForUser(
            @PathVariable("userId") Integer userId) {
        Users users = usersRepository.findById(userId).get();
        return users.getAnimal();
    }

    @GetMapping("/api/origin/{originId}/animals")
    public List<Animal> findAnimalsForOrigin(
            @PathVariable("originId") Integer originId) {
        Origin origin = originRepository.findById(originId).get();
        return origin.getAnimal();
    }

    @GetMapping("/api/animals")
    public List<Animal> findAllAnimals() {
        return (List<Animal>) animalRepository.findAll();
    }

    @GetMapping("/api/animals/{animalId}")
    public Animal findAnimalById(
            @PathVariable("animalId") Integer id) {
        return animalRepository.findById(id).get();
    }

    @PutMapping("/api/animals/{animalId}")
    public Animal updateAnimal(
            @PathVariable("animalId") Integer id,
            @RequestBody() Animal newAnimal) {
        Animal animal = this.findAnimalById(id);
        animal.setName(newAnimal.getName());
        animal.setWeight(newAnimal.getWeight());
        animal.setPrice(newAnimal.getPrice());
        animal.setType(newAnimal.getType());
        return animalRepository.save(animal);
    }

    @DeleteMapping("/api/animals/{animalId}")
    public void deleteAnimal(
            @PathVariable("animalId") Integer id) {
        animalRepository.deleteById(id);
    }
}
