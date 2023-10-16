package com.mera.api.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "PRODUCTOS")
@Setter
@Getter
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    private String nombre;
    private String descripcion;
    private Float precio;
    private Integer stock;
    private String imagen;
    private String color;
    private String talle;



}
