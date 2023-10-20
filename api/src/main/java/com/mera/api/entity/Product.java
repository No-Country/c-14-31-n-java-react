package com.mera.api.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;


@Entity
@Table(name = "products")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@EqualsAndHashCode
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    private String name;
    private String description;
    private BigDecimal price;
    private Integer stock;
    private String image;
    private String color;
    private String waist;
    private Boolean outstanding = false;
/*
    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;
*/

}
