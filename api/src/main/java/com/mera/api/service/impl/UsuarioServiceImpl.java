package com.mera.api.service;

import com.mera.api.dto.request.UsuarioDto;
import com.mera.api.dto.response.ResUsuarioDto;
import com.mera.api.entity.Usuario;
import com.mera.api.repository.IUsuarioRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UsuarioServiceImp implements IUsuarioService {

    @Autowired
    IUsuarioRepository usuarioRepository;

    ModelMapper mapper = new ModelMapper();
    //creamos un ModelMapper(debemos tener la dependencia en el pom).La clase ModelMapper nos permite transformar un objeto relacional en un objeto java



    @Override
    public ResUsuarioDto RegistrarUsuario(UsuarioDto usuarioDto) {

        Usuario usuario = mapper.map(usuarioDto, Usuario.class);

        try {
            usuarioRepository.save(usuario);

        }catch (Exception e){
            throw new RuntimeException("Error al Registrar Usuario");
        }

        return null;
    }
}
