import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { AddEditEmployeeComponent } from './add-edit-employee/add-edit-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListingComponent } from './employee-listing/employee-listing.component';
import { EmployeesComponent } from './employees.component';

@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeeDetailsComponent,
    AddEditEmployeeComponent,
    EmployeeListingComponent,
  ],
  imports: [CommonModule, SharedModule],
})
export class EmployeesModule {}
