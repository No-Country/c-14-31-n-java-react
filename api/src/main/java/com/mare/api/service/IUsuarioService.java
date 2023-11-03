package com.mare.api.service;

import com.mare.api.dto.request.UsuarioDto;
import com.mare.api.dto.request.UsuarioLoginDto;
import com.mare.api.dto.response.RespStandart;
import com.mare.api.record.DataUser;

public interface IUsuarioService {

    RespStandart registrarUsuario(UsuarioDto usuarioDto);

    DataUser loginUsuario(UsuarioLoginDto usuarioLoginDto);

}
