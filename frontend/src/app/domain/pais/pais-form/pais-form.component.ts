import { Component, OnInit } from '@angular/core';
import { Pais } from '../pais';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PaisService } from '../pais.service';
import { ActivatedRoute, Router } from '@angular/router';
import Validation from '../../../core/util/validation';
import { AlertService } from 'src/app/core/alert/alet.service';

@Component({
  selector: 'app-pais-form',
  templateUrl: './pais-form.component.html'
})
export class PaisFormComponent implements OnInit {

  // Declaração de variáveis
  pais: Pais;
  paisForm: FormGroup;
  titulo: string;

  constructor(private paisService: PaisService,
              private alertService: AlertService,
              private builder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {

    // Instanciar um novo pais
    this.pais = new Pais();

    // Obtem o ID do pais pela URL
    this.pais.id = this.route.snapshot.params['id'];

    // Define o título da página
    this.titulo = (this.pais.id) ? 'Editar':'Cadastrar';

    // Reactive forms
    this.paisForm = this.builder.group({
      id: [],
      nome: ['', Validators.required]
    },{});

    // Busca pais caso seja o formulário de editar ou visualizar
    if(this.pais.id){
      this.paisService.findById(this.pais.id)
        .subscribe(pais => this.paisForm.patchValue(pais));
    }

    // Verifica se o formulário seja visualizar
    if(this.route.snapshot.url[0].path =='visualizar'){
     
      // Desabilita o formulário
      this.paisForm.disable();

      // Alterar o título da página
      this.titulo = 'Visualizar';
    }
  }

  // Método para salvar pais
  onSave(pais: Pais) {

    // Verificar se o formulário esta inválido
    if(this.paisForm.invalid){

      // Valida todos os campos do formulário
      Validation.allFormFields(this.paisForm);

      // Alerta com a mensagem de erro
      this.alertService.error("Por favor, preencha os campo obrigatórios!");
    
    } else { // Se o formulário estiver válido

      // Salva os dados na API
      this.paisService.save(pais)
      .subscribe(pais => {

        // Alerta com a mensagem de sucesso
        this.alertService.success("Pais salvo com sucesso!");

        // Redireciona para lista de paises
        this.router.navigate(['/pais']);
      });
    }
  }
  
}
