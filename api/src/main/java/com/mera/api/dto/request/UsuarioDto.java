package com.mera.api.dto.request;

import com.mera.api.enumeration.RoleName;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class UsuarioDto {
    private String nombre;
    private String apellido;
    private String email;
    private String direccion;
    private String telefono;
    private String password;
    @Enumerated(EnumType.STRING)
    private RoleName rol;


}
