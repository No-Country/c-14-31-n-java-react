package com.mera.api.record;

import com.mera.api.entity.Producto;
import java.math.BigDecimal;

public record ListadoProductos(String nombre, String descripcion, BigDecimal precio,
                               Integer stock, String imagen, String color, String talle) {
    public ListadoProductos (Producto producto) {
        this(producto.getNombre(), producto.getDescripcion(), producto.getPrecio(), producto.getStock(),
                producto.getImagen(), producto.getColor(), producto.getTalle());
    }
}
