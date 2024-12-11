import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { finalize } from 'rxjs';
import { Department } from '../core/employee.constant';
import { Employee } from '../core/employees.model';
import { EmployeeService } from '../core/employees.service';

@Component({
  selector: 'app-employee-listing',
  templateUrl: './employee-listing.component.html',
  styleUrl: './employee-listing.component.css',
})
export class EmployeeListingComponent {
  Department = Department;
  DATE_UI = 'dd/MM/yyyy';

  isLoading = false;
  displayedColumns = [
    'id',
    'firstName',
    'lastName',
    'email',
    'phoneNumber',
    'department',
    'actions',
  ];
  dataSource = new MatTableDataSource<Employee>();

  constructor(
    private employeeService: EmployeeService,
  ) {}

  ngOnInit(): void {
    this.getEmployeeListing();
  }

  onDeleteEmpClick(id: string): void {
    // TODO: Promp dlt confirmation and perform dlt
  }

  private getEmployeeListing(): void {
    this.isLoading = true;
    this.employeeService
      .getEmployeeList()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe({
        next: (res) => {
          this.dataSource.data = res.data;
          console.log(this.dataSource);
        },
        error: (err) => {
          // TODO: Error pop up
          console.error(err);
        },
      });
  }
}
