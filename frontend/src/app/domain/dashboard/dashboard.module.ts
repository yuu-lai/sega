import { DashboardRouting } from './dashboard.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardListComponent } from './dashboard-list/dashboard-list.component';

@NgModule({
  declarations: [DashboardListComponent],
  imports: [CommonModule, DashboardRouting]
})
export class DashboardModule {}
