package com.mare.api.dto.response;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class ResUsuarioDto {
    private Long id;
    private String name;
    private String lastName;
    private String email;
    private String address;
    private String phone;
    private String password;

}
