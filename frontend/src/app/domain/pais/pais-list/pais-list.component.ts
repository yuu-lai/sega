import { Component, OnInit } from '@angular/core';
import { Pais } from '../pais';
import { PaisService } from '../pais.service';
import { AlertService } from 'src/app/core/alert/alet.service';

@Component({
  selector: 'app-pais-list',
  templateUrl: './pais-list.component.html'
})
export class PaisListComponent implements OnInit {

  // Declarações de variáveis
  paises: Pais[];

  constructor(private paisService: PaisService,
              private alertService: AlertService) { }

  ngOnInit() {

    // Busca todos os paises
    this.paisService.findAll()
      .subscribe(paises => this.paises = paises);
  }

  // Método para deletar um pais
  onDelete(id: number){

    // Deleta pais na API
    this.paisService.deleteById(id)
      .subscribe(() => {

        // Remove o pais da lista
        this.paises = this.paises
          .filter(pais => pais.id !== id);

        // Alerta com mensagem de sucesso
        this.alertService.success("Pais excluído com sucesso!");
      });
  }
  
}
