package com.example.springtemplate.collector.repositories;

import com.example.springtemplate.collector.models.Origin;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface OriginRepository
        extends CrudRepository<Origin, Integer> {
    @Query(value = "SELECT * FROM origin", nativeQuery = true)
    public List<Origin> findAllOrigin();
    @Query(value = "SELECT * FROM origin WHERE id=:originId", nativeQuery = true)
    public Origin findOriginById(@Param("originId") Integer id);
}
