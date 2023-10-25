package com.mare.api.controller;

import com.mare.api.entity.Product;
import com.mare.api.record.DataRegisterProduct;
import com.mare.api.service.IProductService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;


@RestController
public class ProductController {

    @Autowired
    private IProductService iProductService;

    //Lista todos los productos
    @GetMapping("/")
    public ResponseEntity<List<Product>> getAll(){
        List<Product> products = iProductService.getAll();

        Collections.sort(products, Comparator.comparing(Product::getProductEntry).reversed());
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

    //Filtro por categoria
    @GetMapping("/products/category/{categoryId}")
    public ResponseEntity<List<Product>> getProductsByCategory(@PathVariable Long categoryId) {
        List<Product> products = iProductService.getProductsByCategory(categoryId);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    //filtro por nombre de producto
    @GetMapping("/products/filter/{name}")
    public ResponseEntity<List<Product>> getProductsByName(@PathVariable("name") String name) {
        if (name != null && !name.isEmpty()) {
            // Realiza una búsqueda que no requiera coincidencia exacta del nombre.
            List<Product> products = iProductService.searchProductsByName(name);
            return new ResponseEntity<>(products, HttpStatus.OK);
        } else {
            // Si no se proporciona el parámetro 'name', obtiene todos los productos.
            List<Product> products = iProductService.getAll();
            return new ResponseEntity<>(products, HttpStatus.OK);
        }
    }

    @PostMapping("/created_product")
    public ResponseEntity<String> save(@RequestBody @Valid DataRegisterProduct dataRegisterProduct) throws URISyntaxException {
        int featuredProductCount = 0;
        List<Product> productsFeatured = iProductService.getFeatured();
        for (Product product : productsFeatured) {
            Boolean featured = product.getFeatured();
            featuredProductCount++;
        }
        // Verifica si el producto creado tiene featured=true
        if (featuredProductCount >= 3 && dataRegisterProduct.featured() ) {
            // No permitas crear más de tres productos con featured=true
            return ResponseEntity.badRequest().body("No se pueden crear más de tres productos DESTACADOS");
        } else {
            // Si el producto creado tiene featured=true, incrementa el contador
           if (!dataRegisterProduct.featured()) {
                iProductService.save(new Product(dataRegisterProduct));
            }
        }
        return ResponseEntity.created(new URI("/" + dataRegisterProduct.id())).body(String.valueOf(dataRegisterProduct));
    }

    //Ordenado por precio de mayor a menor
    @GetMapping("/precio/mayor_a_menor")
    public ResponseEntity<List<Product>> getAlOrderedHighestLowestPrice(){
        List<Product> products = iProductService.getAll();
        Collections.sort(products, Comparator.comparing(Product::getPrice).reversed());
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("/precio/menor_a_mayor")
    public ResponseEntity<List<Product>> getAlOrderedLowestHighestPrice(){
        List<Product> products = iProductService.getAll();
        Collections.sort(products, Comparator.comparing(Product::getPrice));
        return new ResponseEntity<>(products, HttpStatus.OK);
    }
}