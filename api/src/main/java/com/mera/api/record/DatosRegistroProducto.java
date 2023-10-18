package com.mera.api.record;

import java.math.BigDecimal;

public record DatosRegistroProducto(String nombre, String descripcion, BigDecimal precio, Integer stock,
                                    String imagen, String color, String talle) {

}
