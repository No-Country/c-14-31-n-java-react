package com.mare.api.entity;

import com.mare.api.record.DataRegisterProduct;
import jakarta.persistence.*;
import lombok.*;
import java.math.BigDecimal;
import java.time.Clock;
import java.time.LocalDate;

@Entity
@Table(name = "products")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private BigDecimal price;
    private Integer stock;
    private String image;
    private String color;
    private String waist;
    private Boolean featured = false;
    private LocalDate productEntry;
    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    public Product(DataRegisterProduct dataRegisterProduct) {
        this.id = dataRegisterProduct.id();
        this.name = dataRegisterProduct.name();
        this.description = dataRegisterProduct.description();
        this.image = dataRegisterProduct.image();
        this.price = dataRegisterProduct.price();
        this.stock = dataRegisterProduct.stock();
        this.waist = dataRegisterProduct.waist();
        this.color = dataRegisterProduct.color();
        this.featured = dataRegisterProduct.featured();
        this.category = new Category(dataRegisterProduct.category());
        this.productEntry = LocalDate.now(Clock.systemDefaultZone());
    }
}