package com.mera.api.controller;

import com.mera.api.entity.Product;
import com.mera.api.service.impl.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class ProductController {

    @Autowired
    private IProductService iProductService;

    @GetMapping("/products")
    public List<Product> getAll(){
        return iProductService.getAll();
    }

    @GetMapping("/products/outstanding")
    public  List<Product> getOutstanding(){ return iProductService.getOutstanding(); }
    @GetMapping("/products/{id}")
    public Product getById(@PathVariable String id){
       return iProductService.getById(Long.parseLong(id));
    }

    @DeleteMapping("/products/{id}")
    public void remove(@PathVariable String id){
        iProductService.remove(Long.parseLong(id));
    }

    @PostMapping("/products")
    public void save(@RequestBody Product product){
        iProductService.save(product);
    }

}