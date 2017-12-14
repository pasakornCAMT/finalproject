package camt.cbsd.finalproject.dao;

import camt.cbsd.finalproject.entity.Actor;

import java.util.List;

public interface ActorDao {
    List<Actor> getActors();
    Actor findById(long id);
    Actor addActor(Actor actor);
    Actor findByUsername(String username);
    Actor updateActor(Actor actor);
    Boolean deleteActorById(long id);
    List<Actor> findByName(String name);
    Actor findByUserUsername(String username);
}
