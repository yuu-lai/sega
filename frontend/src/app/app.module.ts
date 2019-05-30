import { AppRouting } from './app.routing';
import { DashboardModule } from './domain/dashboard/dashboard.module';
import { CarroModule } from './domain/carro/carro.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { GaragemModule } from './domain/garagem/garagem.module';
import { DashboardComponent } from './domain/dashboard/dashboard.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [
    BrowserModule,
    AppRouting,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    CoreModule,
    GaragemModule,
    CarroModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
