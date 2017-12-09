package camt.cbsd.finalproject.service;

import camt.cbsd.finalproject.entity.Product;

import java.util.List;

public interface ProductService {
    List<Product> getProducts();
    Product findById(long id);
    Product addProduct(Product product);
    List<Product> queryProduct(String query);
    void deleteProduct(long id);
    Product updateProduct(Product product);
}
