package com.ecommerce.controller;

import com.ecommerce.daorepo.UserRepository;
import com.ecommerce.dto.SignUpRequest;
import com.ecommerce.entities.User;
import com.ecommerce.security.JwtUtil;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;
    private final UserDetailsService userDetailsService;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthController(AuthenticationManager authenticationManager,
                          JwtUtil jwtUtil,
                          UserDetailsService userDetailsService,
                          UserRepository userRepository,
                          PasswordEncoder passwordEncoder) {
        this.authenticationManager = authenticationManager;
        this.jwtUtil = jwtUtil;
        this.userDetailsService = userDetailsService;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    // --- Register new user ---
    @PostMapping("/register")
    public User register(@RequestBody SignUpRequest signUpRequest) {
        User user = new User();
        user.setName(signUpRequest.getFirstName() + " " + signUpRequest.getLastName());
        user.setPhoneNumber(signUpRequest.getMobileNumber());
        user.setEmail(signUpRequest.getEmail());
        user.setAddress(signUpRequest.getAddress());
        user.setPassword(passwordEncoder.encode(signUpRequest.getPassword()));
        user.setUsername(signUpRequest.getEmail()); // Using email as username
        user.setRole(User.Role.USER);

        // Save to DB
        return userRepository.save(user);
    }

    // --- Login user ---
    @PostMapping("/login")
    public String login(@RequestBody User loginRequest) {
        // Authenticate credentials
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
                        loginRequest.getPassword()
                )
        );

        // Load user from DB
        UserDetails userDetails = userDetailsService.loadUserByUsername(loginRequest.getUsername());

        // Generate JWT Token
        return jwtUtil.generateToken(userDetails.getUsername());
    }
}
