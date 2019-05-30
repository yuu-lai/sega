

import { Component, OnInit } from '@angular/core';

import { AlertService } from 'src/app/core/alert/alet.service';
import { Carro } from '../carro';
import {CarroService} from '../carro.service';

@Component({
  selector: 'app-carro-list',
  templateUrl: './carro-list.component.html',
  styleUrls: ['./carro-list.component.css']
})
export class CarroListComponent implements OnInit {
  // Declarações de variáveis
  carros: Carro[];

  constructor(private carroService: CarroService, private alertService: AlertService) {}

  ngOnInit() {
    // Busca todas os carros
    this.carroService.findAll().subscribe(carros => (this.carros = carros));
  }

  // Método para deleta um carro
  onDelete(id: number) {
    // Deleta o carro na API
    this.carroService.deteleById(id).subscribe(() => {
      // Remove o carro  da lista
      this.carros = this.carros.filter(carro => carro.id !== id);

      // Alerta com a mensagem de sucesso
      this.alertService.success('Carro excluído com sucesso!');
    });
  }
}
