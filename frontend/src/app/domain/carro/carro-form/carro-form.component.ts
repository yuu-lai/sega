import { GaragemService } from './../../garagem/garagem.service';
import { CarroService } from './../carro.service';
import { Carro } from './../carro';
import { Garagem } from './../../garagem/garagem';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Validation from 'src/app/core/util/validation';
import { AlertService } from 'src/app/core/alert/alet.service';

@Component({
  selector: 'app-carro-form',
  templateUrl: './carro-form.component.html'
})
export class CarroFormComponent implements OnInit {
  // Declarações de variáveis
  carro: Carro;
  garagens: Garagem[];
  carroForm: FormGroup;
  titulo: string;

  constructor(
    private garagemService: GaragemService,
    private carroService: CarroService,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute,
    private builder: FormBuilder
  ) {}

  ngOnInit() {
    // Instancia um novo carro
    this.carro = new Carro();

    // Obtem ID de carro pela URL
    this.carro.id = this.route.snapshot.params['id'];

    // Define título da página
    this.titulo = this.carro.id ? 'Editar' : 'Cadastrar';

    // Reactive forms
    this.carroForm = this.builder.group(
      {
        id: [],
        fabricante: ['', Validators.required],
        versao: ['', Validators.required],
        descricao: ['', Validators.required],
        cor: ['', Validators.required],
        valor: ['', Validators.required],
        modelo: ['', Validators.required],
        garagem: ['', Validators.required]
      },
      {}
    );

    // Busca a mantenedora caso seja o formulário de editar ou visualizar
    if (this.carro.id) {
      this.carroService.findById(this.carro.id).subscribe(carro => this.carroForm.patchValue(carro));
    }

    // Verifica se o formulário seja visualizar
    if (this.route.snapshot.url[0].path == 'visualizar') {
      // Desabilita o formulário
      this.carroForm.disable();

      // Alterar o título da página
      this.titulo = 'Visualizar';
    }

    // Busca lista de garagens
    this.garagemService.findAll().subscribe(garagens => (this.garagens = garagens));
  }
  // Marca a opção selecionada no select
  compareFn(c1, c2): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  // Método para salvar carro
  onSave(carro: Carro) {
    // Verifica se o formulário esta inválido
    if (this.carroForm.invalid) {
      // Valida todos os campos do formulário
      Validation.allFormFields(this.carroForm);

      // Alerta com a mensagem de erro
      this.alertService.error('Por favor, preencha os campos obrigatórios!');
    } else {
      // Se o formulário estiver válido

      // Salva os dados na API
      this.carroService.save(carro).subscribe(carro => {
        // Alerta com a mensagem de sucesso
        this.alertService.success('Carro salvo com sucesso!');

        // Redireciona para lista de carros
        this.router.navigate(['/carro']);
      });
    }
  }
}
