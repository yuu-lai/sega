import { GaragemService } from './../garagem.service';
import { Garagem } from './../garagem';
import { Component, OnInit } from '@angular/core';

import { AlertService } from 'src/app/core/alert/alet.service';

@Component({
  selector: 'app-garagem-list',
  templateUrl: './garagem-list.component.html'
})
export class GaragemListComponent implements OnInit {
  // Declarações de variáveis
  garagens: Garagem[];

  constructor(private garagemService: GaragemService, private alertService: AlertService) {}

  ngOnInit() {
    // Busca todas as garagens
    this.garagemService.findAll().subscribe(garagens => (this.garagens = garagens));
  }

  // Método para deleta uma garagem
  onDelete(id: number) {
    // Deleta garagem na API
    this.garagemService.deteleById(id).subscribe(() => {
      // Remove a garagem da lista
      this.garagens = this.garagens.filter(garagem => garagem.id !== id);

      // Alerta com a mensagem de sucesso
      this.alertService.success('Garagem excluída com sucesso!');
    });
  }
}
