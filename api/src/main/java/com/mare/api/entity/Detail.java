package com.mare.api.entity;

import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity
public class Detail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Cart cart;

    @ManyToOne
    private Product product;

    private int cantidad;
    private BigDecimal precioUnitario;
}
