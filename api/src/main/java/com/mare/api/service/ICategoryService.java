package com.mare.api.service;

import com.mare.api.entity.Category;

import java.util.List;

public interface ICategoryService {
    List<Category> getAll();
    Category getById(Long id);
    void remove(Long id);
    void save(Category category);

    List<Category> getCategoriesByName(String name);
}
