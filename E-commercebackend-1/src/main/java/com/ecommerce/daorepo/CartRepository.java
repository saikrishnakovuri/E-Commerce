
package com.ecommerce.daorepo;

import com.ecommerce.entities.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {

    // Custom query method — Spring Data JPA will generate the SQL automatically
    Cart findByUserId(Long userId);
}
