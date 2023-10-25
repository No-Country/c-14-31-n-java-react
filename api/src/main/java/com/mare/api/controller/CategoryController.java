package com.mare.api.controller;

import com.mare.api.entity.Category;
import com.mare.api.record.DataRegisterCategory;
import com.mare.api.service.ICategoryService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;


@RestController
public class CategoryController {

    @Autowired
    private ICategoryService iCategoryService;

    @GetMapping("/categories")
    public ResponseEntity<List<Category>> getAll(){
        List<Category> categories = iCategoryService.getAll();
        return new ResponseEntity<>(categories, HttpStatus.OK);
    }

    @GetMapping("/categories/{id}")
    public ResponseEntity<Category> getById(@PathVariable String id){
        Long categoryId = Long.parseLong(id);
        Category category = iCategoryService.getById(categoryId);
        return new ResponseEntity<>(category, HttpStatus.OK);
    }

    @DeleteMapping("/categories/{id}")
    public ResponseEntity<Void> remove(@PathVariable String id) {
        Long categoryId = Long.parseLong(id);
        iCategoryService.remove(categoryId);
        return  new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PostMapping("/categories")
    public ResponseEntity<DataRegisterCategory> save(@RequestBody @Valid DataRegisterCategory dataRegisterCategory) throws URISyntaxException {
        iCategoryService.save(new Category(dataRegisterCategory));
        return ResponseEntity.created(new URI("/categories" + dataRegisterCategory.id())).body(dataRegisterCategory);
    }

}