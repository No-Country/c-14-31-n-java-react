package com.mera.api.service;


import com.mera.api.entity.Category;
import com.mera.api.repository.ICategoryRepository;
import com.mera.api.service.impl.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService implements ICategoryService {

    @Autowired
    private ICategoryRepository iCategoryRepository;
    @Override
    public List<Category> getAll() {
        return (List<Category>) iCategoryRepository.findAll();
    }

    @Override
    public Category getById(Long id) {
        return (Category) iCategoryRepository.findById(id).get();
    }

    @Override
    public void remove(Long id) {
        iCategoryRepository.deleteById(id);
    }

    @Override
    public void save(Category category) {
        iCategoryRepository.save(category);
    }
}
