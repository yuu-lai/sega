import { Garagem } from './../garagem';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Validation from 'src/app/core/util/validation';
import { Pais } from '../../pais/pais';
import { PaisService } from '../../pais/pais.service';
import { AlertService } from 'src/app/core/alert/alet.service';
import { GaragemService } from '../garagem.service';

@Component({
  selector: 'app-garagem-form',
  templateUrl: './garagem-form.component.html'
})
export class GaragemFormComponent implements OnInit {
  // Declarações de variáveis
  garagem: Garagem;
  paises: Pais[];
  garagemForm: FormGroup;
  titulo: string;

  constructor(
    private garagemService: GaragemService,
    private paisService: PaisService,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute,
    private builder: FormBuilder
  ) {}

  ngOnInit() {
    // Instancia uma nova garagem
    this.garagem = new Garagem();

    // Obtem ID da garagem pela URL
    this.garagem.id = this.route.snapshot.params['id'];

    // Define título da página
    this.titulo = this.garagem.id ? 'Editar' : 'Cadastrar';

    // Reactive forms
    this.garagemForm = this.builder.group(
      {
        id: [],
        nome: ['', [Validators.required]],
        endereco: this.builder.group({
          id: [],
          logradouro: ['', Validators.required],
          complemento: ['', Validators.required],
          bairro: ['', Validators.required],
          cidade: ['', Validators.required],
          estado: ['', Validators.required],
          pais: ['', Validators.required]
        })
      },
      {}
    );

    // Busca a garagem caso seja o formulário de editar ou visualizar
    if (this.garagem.id) {
      this.garagemService.findById(this.garagem.id).subscribe(garagem => this.garagemForm.patchValue(garagem));
    }

    // Verifica se o formulário seja visualizar
    if (this.route.snapshot.url[0].path == 'visualizar') {
      // Desabilita o formulário
      this.garagemForm.disable();

      // Alterar o título da página
      this.titulo = 'Visualizar';
    }

    // Busca lista de paises
    this.paisService.findAll().subscribe(paises => (this.paises = paises));
  }

  // Marca a opção selecionada no select
  compareFn(c1, c2): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  // Método para salvar a garagem
  onSave(garagem: Garagem) {
    // Verifica se o formulário esta inválido
    if (this.garagemForm.invalid) {
      // Valida todos os campos do formulário
      Validation.allFormFields(this.garagemForm);

      // Alerta com a mensagem de erro
      this.alertService.error('Por favor, preencha os campos obrigatórios!');
    } else {
      // Se o formulário estiver válido

      // Salva os dados na API
      this.garagemService.save(garagem).subscribe(garagem => {
        // Alerta com a mensagem de sucesso
        this.alertService.success('Garagem salva com sucesso!');

        // Redireciona para lista de garagens
        this.router.navigate(['/garagem']);
      });
    }
  }
}
