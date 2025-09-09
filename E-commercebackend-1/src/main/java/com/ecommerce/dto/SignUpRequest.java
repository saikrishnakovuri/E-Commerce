
package com.ecommerce.dto;

import lombok.Data;

@Data
public class SignUpRequest {
    private String firstName;
    private String lastName;
    private String mobileNumber;
    private String email;
    private String address;
    private String password;
}
