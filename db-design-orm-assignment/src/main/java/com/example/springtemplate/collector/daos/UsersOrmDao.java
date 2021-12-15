package com.example.springtemplate.collector.daos;

import com.example.springtemplate.collector.models.Users;
import com.example.springtemplate.collector.repositories.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class UsersOrmDao {

    @Autowired
    UsersRepository userRepository;

    @PostMapping("/api/users")
    public Users createUser(@RequestBody Users user) {
        return userRepository.save(user);
    }

    @GetMapping("/api/users")
    public List<Users> findAllUsers() {
        return (List<Users>) userRepository.findAll();
    }

    @GetMapping("/api/users/{userId}")
    public Users findUserById(
            @PathVariable("userId") Integer id) {
        return userRepository.findById(id).get();
    }

    @PutMapping("/api/users/{userId}")
    public Users updateUser(
            @PathVariable("userId") Integer id,
            @RequestBody Users userUpdates) {
        Users users = userRepository.findUserById(id);
        users.setFirstName(userUpdates.getFirstName());
        users.setLastName(userUpdates.getLastName());
        users.setUsername(userUpdates.getUsername());
        users.setPassword(userUpdates.getPassword());
        users.setEmail(userUpdates.getEmail());
        users.setDateOfBirth(userUpdates.getDateOfBirth());
        return userRepository.save(users);
    }

    @DeleteMapping("/api/users/{userId}")
    public void deleteUser(
            @PathVariable("userId") Integer id) {
        userRepository.deleteById(id);
    }
}
