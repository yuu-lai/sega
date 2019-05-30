package io.sega.domain.garagem;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.sega.core.controller.AbstractController;

@RestController
@RequestMapping("/api/garagem")
public class GaragemController extends AbstractController<Garagem> {

}
