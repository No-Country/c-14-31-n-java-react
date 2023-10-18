package com.mera.api.entity;

import com.mera.api.record.DatosActualizarCategoria;
import com.mera.api.record.DatosRegistroCategoria;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "categorias")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Categoria {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private Long productoId;

    public Categoria(DatosRegistroCategoria datosRegistroCategoria) {
        this.nombre = datosRegistroCategoria.nombre();
    }

    public void actualizarDatos(DatosActualizarCategoria datosActualizarCategoria) {
        if (datosActualizarCategoria.nombre() != null){
            this.nombre = datosActualizarCategoria.nombre();
        }
    }
}
