package com.mare.api.exception;

public class UsuarioNotFoundException extends RuntimeException{
    public UsuarioNotFoundException(String msg){
        super(msg);
    }
}
