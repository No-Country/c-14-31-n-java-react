package com.mare.api.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate orderDate;

    @OneToMany(mappedBy = "order")
    private List<OrderItem> orderItems;


    @ManyToOne
    @JoinColumn(name = "user_id")
    private Usuario usuario;
}
