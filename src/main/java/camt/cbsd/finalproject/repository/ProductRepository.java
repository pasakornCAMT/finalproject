package camt.cbsd.finalproject.repository;

import camt.cbsd.finalproject.entity.Product;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product,Long> {
    Product findById(long id);
}
