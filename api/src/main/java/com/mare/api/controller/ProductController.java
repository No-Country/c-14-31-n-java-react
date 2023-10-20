package com.mare.api.controller;

import com.mare.api.entity.Product;
import com.mare.api.service.impl.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class ProductController {

    @Autowired
    private IProductService iProductService;

    @GetMapping("/")
    public List<Product> getAll(){
        return iProductService.getAll();
    }

    @GetMapping("/featured")
    public List<Product> getFeatured(){ return iProductService.getFeatured(); }
    @GetMapping("/{id}")
    public Product getById(@PathVariable String id){
       return iProductService.getById(Long.parseLong(id));
    }

    @DeleteMapping("/{id}")
    public void remove(@PathVariable String id){
        iProductService.remove(Long.parseLong(id));
    }

    @PostMapping("/created_product")
    public void save(@RequestBody Product product){
        iProductService.save(product);
    }

}