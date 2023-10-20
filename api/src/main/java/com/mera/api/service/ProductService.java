package com.mera.api.service;

import com.mera.api.entity.Product;
import com.mera.api.repository.IProductRepository;
import com.mera.api.service.impl.IProductService;
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
    public List<Product> getOutstanding(){
        return (List<Product>) iProductRepository.findByOutstanding(true);
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
