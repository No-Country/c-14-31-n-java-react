package com.mare.api.service.impl;

import com.mare.api.repository.IOrderRepository;
import com.mare.api.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImpl implements IOrderService {
    @Autowired
    private IOrderRepository iOrderRepository;

}
