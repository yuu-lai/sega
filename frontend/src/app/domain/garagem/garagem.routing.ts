import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GaragemFormComponent } from './garagem-form/garagem-form.component';
import { GaragemListComponent } from './garagem-list/garagem-list-component';

const routes: Routes = [
  { path: '', component: GaragemListComponent },
  { path: 'novo', component: GaragemFormComponent },
  { path: 'editar/:id', component: GaragemFormComponent },
  { path: 'visualizar/:id', component: GaragemFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GaragemRouting {}
