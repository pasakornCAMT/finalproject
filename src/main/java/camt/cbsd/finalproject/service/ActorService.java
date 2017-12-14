package camt.cbsd.finalproject.service;

import camt.cbsd.finalproject.entity.Actor;

import java.util.List;

public interface ActorService {
    List<Actor> getActors();
    Actor findById(long id);
    Actor addActor(Actor actor);
    Actor getActorForTransfer(String username);
    Actor updateActor(Actor actor);
    Boolean deleteActorById(long id);
    List<Actor> findByName(String name);
    Actor findByUserUsername(String username);

}
