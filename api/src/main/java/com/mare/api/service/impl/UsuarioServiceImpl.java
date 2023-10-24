package com.mare.api.service.impl;

import com.mare.api.dto.request.UsuarioDto;
import com.mare.api.dto.request.UsuarioLoginDto;
import com.mare.api.entity.Usuario;
import com.mare.api.exception.UsuarioFoundException;
import com.mare.api.exception.UsuarioNotFoundException;
import com.mare.api.repository.IUsuarioRepository;
import com.mare.api.dto.response.RespStandart;

import com.mare.api.service.IUsuarioService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class UsuarioServiceImpl implements IUsuarioService {

    @Autowired
    IUsuarioRepository usuarioRepository;

    @Autowired
    EncrypServiceImpl encrypService;

    ModelMapper mapper = new ModelMapper();
    //creamos un ModelMapper(debemos tener la dependencia en el pom).La clase ModelMapper nos permite transformar un objeto relacional en un objeto java


    @Override
    public RespStandart registrarUsuario(UsuarioDto usuarioDto) {
        RespStandart resp;

        chequeoExisteMail(usuarioDto.getEmail());
        Usuario usuario = mapper.map(usuarioDto, Usuario.class);

        try {

            usuario.setPassword(encrypService.encode(usuario.getPassword()));
            usuarioRepository.save(usuario);
            resp = new RespStandart("Usuario creado con exito");

        } catch (Exception e) {
            throw new RuntimeException("Error al Registrar Usuario");
        }

        return resp;
    }

    @Override
    public RespStandart loginUsuario(UsuarioLoginDto usuarioLoginDto) {
        RespStandart resp;
        Usuario usuario = obtenerDatosUsuario(usuarioLoginDto.getEmail());
        assert usuario != null;

        Boolean loginOk = verificaPass(usuarioLoginDto.getPassword(), usuario.getPassword());
        System.out.println(loginOk);
        if (loginOk) {
            resp = new RespStandart("login Exitoso");
        } else {
            resp = new RespStandart("Contraseña Incorrecta");
        }


        return resp;
    }


    ////////////////////////////////// Metodos de apoyo ////////////////////

    private Boolean verificaPass(String loginPass, String bbddPass) {

        return encrypService.matches((String) loginPass, bbddPass);

    }


    private void chequeoExisteMail(String email) {

        List<Usuario> listaFiltrada = listaUsuarioFiltrada(email);
        if (listaFiltrada.size() > 0) {
            throw new UsuarioFoundException("El mail ya esta en Uso !!");
        }

    }


    private Usuario obtenerDatosUsuario(String email) {
        List<Usuario> lista = listaUsuarioFiltrada(email);
        if (!(lista.size() == 0)) {
            Optional<Usuario> usuarioEncontrado = lista.stream().filter(x -> x.getEmail().equals(email)).findFirst();
            if (usuarioEncontrado.isPresent()) {
                return usuarioEncontrado.get();
            }
        } else {
            throw new UsuarioNotFoundException("Mail No Encontrado !!");
        }

        return null;
    }


    private List<Usuario> listaUsuarioFiltrada(String email) {
        List<Usuario> usuarioList = usuarioRepository.findAll();

        return usuarioList.stream().filter(x -> x.getEmail().equals(email)).toList();
    }
}