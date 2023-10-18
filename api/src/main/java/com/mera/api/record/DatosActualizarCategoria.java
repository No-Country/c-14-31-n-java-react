package com.mera.api.record;

import jakarta.validation.constraints.NotNull;

public record DatosActualizarCategoria(@NotNull Long id, String nombre) {
}
