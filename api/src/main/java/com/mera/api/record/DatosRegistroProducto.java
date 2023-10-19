package com.mera.api.record;

import java.math.BigDecimal;

public record DatosRegistroProducto(Long id, String nombre, String descripcion, BigDecimal precio, Integer stock,
                                    String imagen, String color, String talle) {

}
