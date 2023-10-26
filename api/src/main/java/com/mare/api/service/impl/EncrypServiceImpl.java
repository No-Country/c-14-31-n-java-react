package com.mare.api.service.impl;

import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class EncrypServiceImpl implements PasswordEncoder {
    @Override
    public String encode(CharSequence rawPassword) {
        return BCrypt.hashpw((String) rawPassword, BCrypt.gensalt());
    }

    @Override
    public boolean matches(CharSequence rawPassword, String encodedPassword) {

        return BCrypt.checkpw((String) rawPassword, encodedPassword);
    }
}
