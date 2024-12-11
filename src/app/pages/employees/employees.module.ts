import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { EmployeesComponent } from './employees.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AddEditEmployeeComponent } from './add-edit-employee/add-edit-employee.component';
import { EmployeeListingComponent } from './employee-listing/employee-listing.component';

@NgModule({
  declarations: [EmployeesComponent, EmployeeDetailsComponent, AddEditEmployeeComponent, EmployeeListingComponent],
  imports: [CommonModule, SharedModule],
})
export class EmployeesModule {}
