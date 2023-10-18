package com.mera.api.entity;

import com.mera.api.record.DatosActualizarProducto;
import com.mera.api.record.DatosRegistroProducto;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;


@Entity
@Table(name = "productos")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    private String nombre;
    private String descripcion;
    private BigDecimal precio;
    private Integer stock;
    private String imagen;
    private String color;
    private String talle;

    @ManyToOne
    private Categoria categoria;


    public Producto(DatosRegistroProducto datosRegistroProducto) {
        this.nombre = datosRegistroProducto.nombre();
        this.descripcion = datosRegistroProducto.descripcion();
        this.precio = datosRegistroProducto.precio();
        this.stock = datosRegistroProducto.stock();
        this.imagen = datosRegistroProducto.imagen();
        this.color = datosRegistroProducto.color();
        this.talle = datosRegistroProducto.talle();

    }


    public void actualizarDatos(DatosActualizarProducto datosActualizarProducto) {
        if (datosActualizarProducto.nombre() != null){
            this.nombre = datosActualizarProducto.nombre();
        }
        if (datosActualizarProducto.descripcion() != null){
            this.descripcion = datosActualizarProducto.descripcion();
        }
        if (datosActualizarProducto.precio() != null){
            this.precio = datosActualizarProducto.precio();
        }
        if (datosActualizarProducto.stock() != null){
            this.stock = datosActualizarProducto.stock();
        }
        if (datosActualizarProducto.imagen() != null){
            this.imagen = datosActualizarProducto.imagen();
        }
        if (datosActualizarProducto.color() != null){
            this.color = datosActualizarProducto.color();
        }
        if (datosActualizarProducto.talle() != null){
            this.talle = datosActualizarProducto.talle();
        }
    }
}
