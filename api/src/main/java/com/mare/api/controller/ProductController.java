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

    //Lista todos los productos
    @GetMapping("/")
    public ResponseEntity<List<Product>> getAll(){
        List<Product> products = iProductService.getAll();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    //Muestra los productos destacados
    @GetMapping("/featured")
    public ResponseEntity<List<Product>> getFeatured(){
        List<Product> productsFeatured = iProductService.getFeatured();
        return new ResponseEntity<>(productsFeatured, HttpStatus.OK);
    }

    //Muestra un producto seleccionado
    @GetMapping("/{id}")
    public ResponseEntity<Product> getById(@PathVariable String id){
        Long productId = Long.parseLong(id);
        Product product = iProductService.getById(productId);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    //Elimina un producto
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> remove(@PathVariable String id){
        Long productId = Long.parseLong(id);
        iProductService.remove(productId);
        return  new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    //Crea un producto
    @PostMapping("/created_product")
    public ResponseEntity<DataRegisterProduct>save(@RequestBody @Valid DataRegisterProduct dataRegisterProduct) throws URISyntaxException {
        iProductService.save(new Product(dataRegisterProduct));
        return ResponseEntity.created(new URI("/"+ dataRegisterProduct.id())).body(dataRegisterProduct);
    }

    //Filtro por categoria
    @GetMapping("/products/category/{categoryId}")
    public ResponseEntity<List<Product>> getProductsByCategory(@PathVariable Long categoryId) {
        List<Product> products = iProductService.getProductsByCategory(categoryId);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }


    //filtro por nombre de producto
    @GetMapping("/products/filter/{name}")
    public ResponseEntity<List<Product>> getProductsByName(@PathVariable("name") String name) {
        System.out.println(name);
        if (name != null) {
            // Si se proporciona el parámetro 'name', filtra por nombre.
            List<Product> products = iProductService.getProductsByName(name);
            return new ResponseEntity<>(products, HttpStatus.OK);
        } else {
            // Si no se proporciona el parámetro 'name', obtiene todos productos.
            List<Product> products = iProductService.getAll();
            return new ResponseEntity<>(products, HttpStatus.OK);
        }
    }


}