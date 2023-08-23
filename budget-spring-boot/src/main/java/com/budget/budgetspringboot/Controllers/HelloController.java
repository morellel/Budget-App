package com.budget.budgetspringboot.Controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    @GetMapping("/api/hello-world")
    public String sayHello() {return "Hello World!";}
}