package com.mare.api.exception;


import com.mare.api.dto.response.RespStandart;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
@ControllerAdvice
public class ExceptionController {

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<RespStandart> handleCustomException(RuntimeException ex) {
        // Obtener el mensaje de la excepción
        String mensaje = ex.getMessage();
        if(ex instanceof UsuarioNotFoundException){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new RespStandart(mensaje));

        }else if(ex instanceof UsuarioFoundException){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new RespStandart(mensaje));

        } else {
            // Devolver una respuesta con el mensaje de la excepción
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new RespStandart(mensaje));
        }
    }


}
