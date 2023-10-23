package com.mare.api.controller;

import com.mare.api.entity.Cart;
import com.mare.api.entity.Product;
import com.mare.api.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
@RequestMapping("/cart")
public class CartController {

    @Autowired
    private IProductService iProductService;
    private Cart cart = new Cart();



    @GetMapping
    public List<Product> ListProduct(){
        return iProductService.getAll();
    }

    @PostMapping("/add")
    public String addCart(@RequestParam Long id) {

        Product product = iProductService.getById(id);
        cart.addProduct(product);

        return "redirect:/cart";
    }
}
