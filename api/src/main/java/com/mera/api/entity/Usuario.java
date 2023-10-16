package com.mera.api.entity;
import com.mera.api.enumeration.RoleName;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "USUARIOS")
@Setter @Getter
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private String apellido;
    private String email;
    private String direccion;
    private String telefono;
    private String password;
    private RoleName rol;
}
