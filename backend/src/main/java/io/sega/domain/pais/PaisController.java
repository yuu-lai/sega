package io.sega.domain.pais;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.sega.core.controller.AbstractController;

@RestController
@RequestMapping("/api/pais")
public class PaisController extends AbstractController<Pais> {

}
