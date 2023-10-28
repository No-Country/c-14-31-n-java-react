package com.mare.api.dto.response;

import lombok.Getter;
import lombok.Setter;

@Setter @Getter
public class RespStandart {


    public RespStandart() {
    }

    public RespStandart(String mensaje) {
        this.mensaje = mensaje;
    }


    private String mensaje;
}
