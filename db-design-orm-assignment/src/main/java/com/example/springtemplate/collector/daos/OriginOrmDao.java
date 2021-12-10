package com.example.springtemplate.collector.daos;


import com.example.springtemplate.collector.models.Origin;
import com.example.springtemplate.collector.repositories.OriginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class OriginOrmDao {
    @Autowired
    OriginRepository originRepository;

    @PostMapping("/api/origin")
    public Origin createOrigin(@RequestBody Origin origin) {
        return originRepository.save(origin);
    }

    @GetMapping("/api/origin")
    public List<Origin> findAllOrigin() {
        return originRepository.findAllOrigin();
    }

    @GetMapping("/api/origin/{originId}")
    public Origin findOriginById(
            @PathVariable("originId") Integer id) {
        return originRepository.findOriginById(id);
    }

    @PutMapping("/api/origin/{originId}")
    public Origin updateOrigin(
            @PathVariable("originId") Integer id,
            @RequestBody Origin originUpdates) {
        Origin origin = originRepository.findOriginById(id);
        origin.setOrigin(originUpdates.getOrigin());
        return originRepository.save(origin);
    }

    @DeleteMapping("/api/origin/{originId}")
    public void deleteUser(
            @PathVariable("originId") Integer id) {
        originRepository.deleteById(id);
    }
}
