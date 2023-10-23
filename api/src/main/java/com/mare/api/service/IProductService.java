package com.mare.api.service;

import com.mare.api.entity.Product;

import java.util.List;

public interface IProductService {
    List<Product> getAll();
    List<Product> getFeatured();
    Product getById(Long id);
    void remove(Long id);
    void save(Product product);
}
