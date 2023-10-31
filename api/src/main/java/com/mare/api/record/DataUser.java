package com.mare.api.record;

import com.mare.api.enumeration.RoleName;

public record DataUser(String name,
        String lastName,
        String email,
        String address,
        String phone,
        String password,
        RoleName rol ) {
}
