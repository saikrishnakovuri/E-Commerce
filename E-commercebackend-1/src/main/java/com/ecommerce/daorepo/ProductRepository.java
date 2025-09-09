

package com.ecommerce.daorepo;

import com.ecommerce.entities.Product;
//import com.sun.tools.javac.util.List;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    
     List<Product> findByNameContaining(String keyword);
}
