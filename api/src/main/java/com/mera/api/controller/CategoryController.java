package com.mera.api.controller;

import com.mera.api.entity.Category;
import com.mera.api.service.impl.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class CategoryController {

    @Autowired
    private ICategoryService iCategoryService;

    @GetMapping("/categories")
    public List<Category> getAll(){
        return iCategoryService.getAll();
    }

    @GetMapping("/categories/{id}")
    public Category getById(@PathVariable String id){
       return iCategoryService.getById(Long.parseLong(id));
    }

    @DeleteMapping("/categories/{id}")
    public void remove(@PathVariable String id){
        iCategoryService.remove(Long.parseLong(id));
    }

    @PostMapping("/categories")
    public void save(@RequestBody Category category){
        iCategoryService.save(category);
    }

}