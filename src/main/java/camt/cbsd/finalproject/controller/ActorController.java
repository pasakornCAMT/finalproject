package camt.cbsd.finalproject.controller;

import camt.cbsd.finalproject.entity.Actor;
import camt.cbsd.finalproject.service.ActorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200",allowedHeaders = "*")
public class ActorController {

    ActorService actorService;

    @Autowired
    public void setActorService(ActorService actorService) {
        this.actorService = actorService;
    }

    @CrossOrigin
    @GetMapping("/actor")
    public ResponseEntity<?> getActors(){
        List<Actor> actors = actorService.getActors();
        return ResponseEntity.ok(actors);
    }

    @PutMapping("/actor")
    public Actor updateActor(@RequestBody Actor actor){
        return actorService.updateActor(actor);
    }

    @DeleteMapping("/actor/{id}")
    public boolean deleteActorById(@PathVariable long id){
        return actorService.deleteActorById(id);
    }

    @GetMapping("actors")
    public ResponseEntity<?> queryActors(@RequestParam("search") String query) {
        List<Actor> actors = actorService.findByName(query);
        if (actors != null)
            return ResponseEntity.ok(actors);
        else
            //http code 204
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
    @GetMapping("actors-username")
    public ResponseEntity<?> queryActorsUsername(@RequestParam("search") String query) {
        Actor actors = actorService.findByUserUsername(query);
        if (actors != null)
            return ResponseEntity.ok(actors);
        else
            //http code 204
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
