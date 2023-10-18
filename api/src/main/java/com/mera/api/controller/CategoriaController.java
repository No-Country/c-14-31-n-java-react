package com.mera.api.controller;

import com.mera.api.entity.Categoria;
import com.mera.api.record.DatosActualizarCategoria;
import com.mera.api.record.DatosRegistroCategoria;
import com.mera.api.record.DatosRespuestaCategoria;
import com.mera.api.record.ListadoCategorias;
import com.mera.api.repository.ICategoriaRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/categorias")
public class CategoriaController {

    @Autowired
    private ICategoriaRepository iCategoriaRepository;
    @PostMapping
    public ResponseEntity<DatosRespuestaCategoria> registrarCategoria(@RequestBody @Valid DatosRegistroCategoria datosRegistroCategoria, UriComponentsBuilder uriComponentsBuilder){

        Categoria categoria = iCategoriaRepository.save(new Categoria(datosRegistroCategoria));

        DatosRespuestaCategoria datosRespuestaCategoria = new DatosRespuestaCategoria(categoria.getId(), categoria.getNombre());
        URI uri = uriComponentsBuilder.path("/categorias/{id}").buildAndExpand(categoria.getId()).toUri();
        return ResponseEntity.created(uri).body(datosRespuestaCategoria);

    }


    @GetMapping
    public ResponseEntity<Page<ListadoCategorias>> listadoCategorias(@PageableDefault Pageable paginacion) {

        return ResponseEntity.ok(iCategoriaRepository.findAll(paginacion).map(ListadoCategorias::new));

    }

    @PutMapping
    @Transactional
    public ResponseEntity actualizarMedico(@RequestBody @Valid DatosActualizarCategoria datosActualizarCategoria){
        Categoria categoria = iCategoriaRepository.getReferenceById(datosActualizarCategoria.id());
        categoria.actualizarDatos(datosActualizarCategoria);
        return ResponseEntity.ok(new DatosRespuestaCategoria(categoria.getId(), categoria.getNombre()));
    }

    @DeleteMapping("/{id}")
    @Transactional
    public void eliminarCategoria(@PathVariable Long id){
        Categoria categoria = iCategoriaRepository.getReferenceById(id);
        iCategoriaRepository.delete(categoria);
    }

    @GetMapping("/{id}")
    public ResponseEntity retornarDatosCategoria(@PathVariable  Long id){
       Categoria categoria = iCategoriaRepository.getReferenceById(id);
        var datosCategoria = new DatosRespuestaCategoria(categoria.getId(), categoria.getNombre());
        return ResponseEntity.ok(datosCategoria);
    }
}
