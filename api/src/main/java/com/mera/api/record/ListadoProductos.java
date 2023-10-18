package com.mera.api.record;

import com.mera.api.entity.Producto;
import java.math.BigDecimal;

public record ListadoProductos(String imagen, String nombre, BigDecimal precio) {
    public ListadoProductos (Producto producto) {
        this(producto.getImagen(), producto.getNombre(),  producto.getPrecio());
    }
}
