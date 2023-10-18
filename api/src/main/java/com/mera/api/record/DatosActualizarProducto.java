package com.mera.api.record;

import jakarta.validation.constraints.NotNull;

import java.math.BigDecimal;

public record DatosActualizarProducto(@NotNull Long id, String nombre, String descripcion, BigDecimal precio,
                                      Integer stock, String imagen, String color, String talle) {
}
