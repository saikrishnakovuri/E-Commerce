package com.ecommerce.controller;

import com.ecommerce.entities.CartItem;
import com.ecommerce.daorepo.CartItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart-items")
public class CartItemController {

    @Autowired
    private CartItemRepository cartItemRepository;

    // ✅ Get all cart items
    @GetMapping
    public List<CartItem> getAllCartItems() {
        return cartItemRepository.findAll();
    }

    // ✅ Get a single cart item by ID
    @GetMapping("/{id}")
    public CartItem getCartItem(@PathVariable Long id) {
        return cartItemRepository.findById(id).orElse(null);
    }

    // ✅ Update cart item quantity
    @PutMapping("/{id}/quantity/{quantity}")
    public CartItem updateQuantity(@PathVariable Long id, @PathVariable int quantity) {
        CartItem cartItem = cartItemRepository.findById(id).orElse(null);
        if (cartItem != null) {
            cartItem.setQuantity(quantity);
            return cartItemRepository.save(cartItem);
        }
        return null;
    }

    // ✅ Delete a cart item
    @DeleteMapping("/{id}")
    public String deleteCartItem(@PathVariable Long id) {
        cartItemRepository.deleteById(id);
        return "Cart item deleted";
    }
}

