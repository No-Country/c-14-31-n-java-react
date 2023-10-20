package com.mare.api.dto.request;

import com.mare.api.enumeration.RoleName;
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
    private RoleName rol = RoleName.ROL_USER;


}
