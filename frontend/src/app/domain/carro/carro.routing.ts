import { CarroFormComponent } from './carro-form/carro-form.component';
import { CarroListComponent } from './carro-list/carro-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: CarroListComponent },
  { path: 'novo', component: CarroFormComponent },
  { path: 'editar/:id', component: CarroFormComponent },
  { path: 'visualizar/:id', component: CarroFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CarroRouting {}