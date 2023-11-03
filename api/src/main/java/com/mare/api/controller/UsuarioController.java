
package com.mare.api.controller;

import com.mare.api.dto.request.UsuarioDto;
import com.mare.api.dto.request.UsuarioLoginDto;
import com.mare.api.dto.response.RespStandart;
import com.mare.api.record.DataUser;
import com.mare.api.service.impl.UsuarioServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api.mare.com/user")
public class UsuarioController {

    @Autowired
    UsuarioServiceImpl usuarioService;

    @PostMapping("/register")
    public ResponseEntity<RespStandart> registroUsuario(@RequestBody UsuarioDto usuarioDto){
        return new ResponseEntity<>(usuarioService.registrarUsuario(usuarioDto),  HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<DataUser> loginUsuario(@RequestBody UsuarioLoginDto usuarioLoginDto){
        return new ResponseEntity<>(usuarioService.loginUsuario(usuarioLoginDto),  HttpStatus.OK);
    }
}
