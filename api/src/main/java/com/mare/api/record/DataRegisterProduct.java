package com.mare.api.record;

import java.math.BigDecimal;

public record DataRegisterProduct(Long id,
                                  String name,
                                  String description,
                                  String image,
                                  BigDecimal price,
                                  Integer stock,
                                  String waist,
                                  String color,
                                  Boolean featured,
                                  DataRegisterCategory category) {
}
