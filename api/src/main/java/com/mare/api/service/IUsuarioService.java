package com.mare.api.service;

import com.mare.api.dto.request.UsuarioDto;
import com.mare.api.dto.request.UsuarioLoginDto;
import com.mare.api.dto.response.RespStandart;

public interface IUsuarioService {

    RespStandart registrarUsuario(UsuarioDto usuarioDto);

    RespStandart loginUsuario(UsuarioLoginDto usuarioLoginDto);

}
