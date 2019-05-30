import { CarroRouting } from './carro.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './../../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarroListComponent } from './carro-list/carro-list.component';
import { CarroFormComponent } from './carro-form/carro-form.component';

@NgModule({
  declarations: [CarroFormComponent, CarroListComponent],
  imports: [CommonModule, ReactiveFormsModule, CoreModule, CarroRouting]
})
export class CarroModule {}
