import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldComponent } from './field/field.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [FieldComponent, AlertComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FieldComponent,
    AlertComponent
  ]
})
export class CoreModule { }
