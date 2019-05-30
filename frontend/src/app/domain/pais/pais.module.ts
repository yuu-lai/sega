import { PaisRouting } from './pais.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisListComponent } from './pais-list/pais-list.component';
import { PaisFormComponent } from './pais-form/pais-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    PaisListComponent, 
    PaisFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoreModule,
    PaisRouting
  ]
})
export class PaisModule { }
