package com.mera.api.controller;

import com.mera.api.entity.Producto;
import com.mera.api.entity.Producto;
import com.mera.api.record.*;
import com.mera.api.repository.IProductoRepository;
import com.mera.api.repository.IProductoRepository;

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
import java.util.Optional;
@RestController
@RequestMapping("/productos")
public class ProductoController {

    @Autowired
    private IProductoRepository iProductoRepository;
    @PostMapping
    public ResponseEntity<DatosRespuestaProducto> registrarProducto(@RequestBody @Valid DatosRegistroProducto datosRegistroProducto, UriComponentsBuilder uriComponentsBuilder){

        Producto producto = iProductoRepository.save(new Producto(datosRegistroProducto));

        DatosRespuestaProducto datosRespuestaProducto = new DatosRespuestaProducto(producto.getId(), producto.getNombre(), producto.getDescripcion(),
                producto.getPrecio(), producto.getStock(), producto.getImagen(), producto.getColor(), producto.getTalle());
        URI uri = uriComponentsBuilder.path("/productos/{id}").buildAndExpand(producto.getId()).toUri();
        return ResponseEntity.created(uri).body(datosRespuestaProducto);

    }


    @GetMapping
    public ResponseEntity<Page<ListadoProductos>> listadoProductos(@PageableDefault Pageable paginacion) {

        return ResponseEntity.ok(iProductoRepository.findAll(paginacion).map(ListadoProductos::new));

    }

    @PutMapping
    @Transactional
    public ResponseEntity actualizarMedico(@RequestBody @Valid DatosActualizarProducto datosActualizarProducto){
        Producto producto = iProductoRepository.getReferenceById(datosActualizarProducto.id());
        producto.actualizarDatos(datosActualizarProducto);
        return ResponseEntity.ok(new DatosRespuestaProducto(producto.getId(), producto.getNombre(), producto.getDescripcion(),
                producto.getPrecio(), producto.getStock(), producto.getImagen(), producto.getColor(), producto.getTalle()));
    }

    @DeleteMapping("/{id}")
    @Transactional
    public void eliminarProducto(@PathVariable Long id){
        Producto producto = iProductoRepository.getReferenceById(id);
        iProductoRepository.delete(producto);
    }

    @GetMapping("/{id}")
    public ResponseEntity retornarDatosProducto(@PathVariable  Long id){
        Producto producto = iProductoRepository.getReferenceById(id);
        var datosProducto = new DatosRespuestaProducto(producto.getId(), producto.getNombre(), producto.getDescripcion(),
                producto.getPrecio(), producto.getStock(), producto.getImagen(), producto.getColor(), producto.getTalle());
        return ResponseEntity.ok(datosProducto);
    }
}
