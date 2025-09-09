package com.ecommerce.controller;

import com.ecommerce.entities.Cart;
import com.ecommerce.entities.CartItem;
import com.ecommerce.entities.Product;
import com.ecommerce.entities.User;
import com.ecommerce.daorepo.CartItemRepository;
import com.ecommerce.daorepo.CartRepository;
import com.ecommerce.daorepo.ProductRepository;
import com.ecommerce.daorepo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
public class CartController {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private CartItemRepository cartItemRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProductRepository productRepository;

    // Get cart by user ID
    @GetMapping("/{userId}")
    public Cart getCartByUser(@PathVariable Long userId) {
        return cartRepository.findByUserId(userId);
    }

    // Add product to cart
    @PostMapping("/{userId}/add/{productId}")
    public Cart addToCart(@PathVariable Long userId, @PathVariable Long productId, @RequestParam int quantity) {
        Cart cart = cartRepository.findByUserId(userId);
        if (cart == null) {
            User user = userRepository.findById(userId).orElse(null);
            if (user == null) return null;
            cart = new Cart(user);
            cartRepository.save(cart);
        }

        Product product = productRepository.findById(productId).orElse(null);
        if (product == null) return cart;

        CartItem item = new CartItem(cart, product, quantity);
        cartItemRepository.save(item);

        cart.getItems().add(item);
        return cartRepository.save(cart);
    }

    // Remove product from cart
    @DeleteMapping("/{userId}/remove/{productId}")
    public Cart removeFromCart(@PathVariable Long userId, @PathVariable Long productId) {
        Cart cart = cartRepository.findByUserId(userId);
        if (cart == null) return null;

        List<CartItem> items = cart.getItems();
        items.removeIf(item -> item.getProduct().getId().equals(productId));
        cart.setItems(items);

        return cartRepository.save(cart);
    }
}

