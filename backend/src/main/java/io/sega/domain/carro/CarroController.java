package io.sega.domain.carro;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.sega.core.controller.AbstractController;

@RestController
@RequestMapping("/api/carro")
public class CarroController extends AbstractController<Carro> {

}
