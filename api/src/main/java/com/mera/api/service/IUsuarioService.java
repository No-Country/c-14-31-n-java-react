package com.mera.api.service;

import com.mera.api.dto.request.UsuarioDto;
import com.mera.api.dto.request.UsuarioLoginDto;
import com.mera.api.dto.response.RespStandart;

public interface IUsuarioService {

    RespStandart registrarUsuario(UsuarioDto usuarioDto);

    RespStandart loginUsuario(UsuarioLoginDto usuarioLoginDto);

}
