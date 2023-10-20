package com.mera.api.service.impl;

import com.mera.api.entity.Category;

import java.util.List;


public interface ICategoryService {
    List<Category> getAll();
    Category getById(Long id);
    void remove(Long id);
    void save(Category category);
}
