package com.example.springtemplate.collector.repositories;

import com.example.springtemplate.collector.models.Users;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UsersRepository
        extends CrudRepository<Users, Integer> {
    @Query(value = "SELECT * FROM users", nativeQuery = true)
    public List<Users> findAllUsers();
    @Query(value = "SELECT * FROM users WHERE id=:userId", nativeQuery = true)
    public Users findUserById(@Param("userId") Integer id);
}
