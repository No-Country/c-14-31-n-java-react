package com.mera.api.record;

import com.mera.api.entity.Categoria;

public record ListadoCategorias(String nombre) {
    public ListadoCategorias(Categoria categoria) {
        this(categoria.getNombre());
    }
}
