package com.mare.api.dto.request;

import com.mare.api.enumeration.RoleName;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class UsuarioDto {
    private String name;
    private String lastName;
    private String email;
    private String address;
    private String phone;
    private String password;
    private RoleName rol = RoleName.ROL_USER;


}
