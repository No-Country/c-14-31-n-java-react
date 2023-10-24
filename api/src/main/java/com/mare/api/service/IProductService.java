package com.mare.api.service;

import com.mare.api.entity.Product;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public interface IProductService {
    List<Product> getAll();
    List<Product> getFeatured();
    Product getById(Long id);
    void remove(Long id);
    void save(Product product);
}
