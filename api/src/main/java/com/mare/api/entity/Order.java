package com.mare.api.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "ordenes")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String numero;
    private LocalDate orderDate;
    private LocalDate dateReceived;
    private double total;

    @OneToMany(mappedBy = "order")
    private List<OrderDetail> orderItems;

    @ManyToOne
    private Usuario usuario;

    @OneToOne(mappedBy = "order")
    private OrderDetail orderDetail;
}
