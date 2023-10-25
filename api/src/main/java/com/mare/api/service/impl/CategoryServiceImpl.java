package com.mare.api.service.impl;


import com.mare.api.entity.Category;
import com.mare.api.repository.ICategoryRepository;
import com.mare.api.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements ICategoryService {

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

    @Override
    public List<Category> getCategoriesByName(String name) {
        return iCategoryRepository.findAllByName(name);

    }


}
