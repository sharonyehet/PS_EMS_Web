import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { EmployeesModule } from '../../pages/employees/employees.module';

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, SharedModule, AdminRoutingModule, EmployeesModule],
})
export class AdminModule {}
