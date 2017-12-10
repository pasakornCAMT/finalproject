package camt.cbsd.finalproject.security.repository;

import camt.cbsd.finalproject.entity.security.Authority;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthorityRepository extends JpaRepository <Authority,Long> {
}
