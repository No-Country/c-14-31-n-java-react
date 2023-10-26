package com.mare.api.service.impl;

import com.mare.api.entity.Product;
import com.mare.api.repository.IProductRepository;
import com.mare.api.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ProductServiceImpl implements IProductService {

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
    public void remove(Long id) { iProductRepository.deleteById(id); }

    @Override
    public void save(Product product) { iProductRepository.save(product); }

    @Override
    public List<Product> getProductsByCategory(Long categoryId) {
        return iProductRepository.findByCategory_Id(categoryId);
    }

    @Override
    public List<Product> getProductsByName(String name) {
        return iProductRepository.findByName(name);
    }

    @Override
    public List<Product> searchProductsByName(String name) {
        // Utiliza una consulta personalizada que busca productos que contengan el nombre proporcionado.
        return iProductRepository.findByNameContaining(name);
    }
}
