package com.mare.api.service;

import com.mare.api.entity.Product;
import com.mare.api.repository.IProductRepository;
import com.mare.api.service.impl.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ProductService implements IProductService {

    @Autowired
    private IProductRepository iProductRepository;
    @Override
    public List<Product> getAll() {
        return (List<Product>) iProductRepository.findAll();
    }

    @Override
    public List<Product> getFeatured() {
        return (List<Product>) iProductRepository.findByFeatured(true);
    }

    @Override
    public Product getById(Long id) {
        return (Product) iProductRepository.findById(id).get();
    }

    @Override
    public void remove(Long id) {
        iProductRepository.deleteById(id);
    }

    @Override
    public void save(Product product) {
        iProductRepository.save(product);
    }
}
