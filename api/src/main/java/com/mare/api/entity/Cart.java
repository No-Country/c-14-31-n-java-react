package com.mare.api.entity;

import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class Cart {
    private List<Product> items = new ArrayList<>();

    public List<Product> getItems(){
        return items;
    }

    public void addProduct(Product product){
        items.add(product);
    }
}
