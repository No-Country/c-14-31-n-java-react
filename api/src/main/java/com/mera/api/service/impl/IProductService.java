package com.mera.api.service.impl;

import com.mera.api.entity.Product;

import java.util.List;

public interface IProductService {
    List<Product> getAll();
    List<Product> getOutstanding();
    Product getById(Long id);
    void remove(Long id);
    void save(Product product);
}
