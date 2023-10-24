package com.mare.api.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImpl {
    @Autowired
    private IOrderRepository iOrderRepository;

}
