package com.mare.api.controller;

import com.mare.api.entity.Product;
import com.mare.api.record.DataRegisterProduct;
import com.mare.api.service.IProductService;
import jakarta.validation.Valid;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;


@RestController
public class ProductController {

    @Autowired
    private IProductService iProductService;

    @GetMapping("/")
    public ResponseEntity<List<Product>> getAll(){
        List<Product> products = iProductService.getAll();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("/featured")
    public ResponseEntity<List<Product>> getFeatured(){
        List<Product> productsFeatured = iProductService.getFeatured();
        return new ResponseEntity<>(productsFeatured, HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Product> getById(@PathVariable String id){
        Long productId = Long.parseLong(id);
        Product product = iProductService.getById(productId);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> remove(@PathVariable String id){
        Long productId = Long.parseLong(id);
        iProductService.remove(productId);
        return  new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PostMapping("/created_product")
    public ResponseEntity<DataRegisterProduct>save(@RequestBody @Valid DataRegisterProduct dataRegisterProduct) throws URISyntaxException {
        iProductService.save(new Product(dataRegisterProduct));
        return ResponseEntity.created(new URI("/"+ dataRegisterProduct.id())).body(dataRegisterProduct);
    }

}