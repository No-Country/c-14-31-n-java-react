package com.mare.api.repository;

import com.mare.api.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByFeatured(boolean featured);

    List<Product> findByCategory_Id(Long categoryId);

    List<Product> findByName(String name);

    List<Product> findByNameContaining(String name);
}
