import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from '../../pages/employees/employees.component';
import { EmployeeDetailsComponent } from '../../pages/employees/employee-details/employee-details.component';
import { AddEditEmployeeComponent } from '../../pages/employees/add-edit-employee/add-edit-employee.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'employees' },
  {
    path: 'employees',
    children: [
      {
        path: '',
        component: EmployeesComponent,
        children: [
          {
            path: 'add',
            component: AddEditEmployeeComponent,
          },
          {
            path: ':id',
            component: EmployeeDetailsComponent,
            children: [
              {
                path: 'edit',
                component: AddEditEmployeeComponent,
              },
            ],
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
