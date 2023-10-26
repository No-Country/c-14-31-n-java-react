package com.mare.api.entity;

import com.mare.api.record.DataRegisterCategory;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "categories")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor

@EqualsAndHashCode
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    public Category(DataRegisterCategory dataRegisterCategory){
        this.id = dataRegisterCategory.id();
        this.name = dataRegisterCategory.name();
    }
}
