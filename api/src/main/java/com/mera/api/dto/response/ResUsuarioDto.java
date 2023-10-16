package com.mera.api.dto.response;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class ResUsuarioDto {
    private Long id;
    private String nombre;
    private String apellido;
    private String email;
    private String direccion;
    private String telefono;
    private String password;

}
