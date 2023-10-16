package com.mera.api.controller;

import com.mera.api.dto.request.UsuarioDto;
import com.mera.api.dto.request.UsuarioLoginDto;
import com.mera.api.dto.response.RespStandart;
import com.mera.api.service.impl.UsuarioServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api.mera.com/usuarios/")
public class UsuarioController {

    @Autowired
    UsuarioServiceImpl usuarioService;

    @PostMapping("/registro")
    public ResponseEntity<RespStandart> registroUsuario(@RequestBody UsuarioDto usuarioDto){
        return new ResponseEntity<>(usuarioService.registrarUsuario(usuarioDto),  HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<RespStandart> loginUsuario(@RequestBody UsuarioLoginDto usuarioLoginDto){
        return new ResponseEntity<>(usuarioService.loginUsuario(usuarioLoginDto),  HttpStatus.OK);
    }

}
