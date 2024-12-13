import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { finalize } from 'rxjs';
import {
  DATE_UI,
  UNEXPECTED_ERROR,
} from '../../../core/constants/app.constants';
import { UiPaginationModel } from '../../../core/models/app.model';
import { ErrorModel } from '../../../core/models/response.model';
import { Department, Gender } from '../core/employee.constant';
import { Employee } from '../core/employees.model';
import { EmployeeService } from '../core/employees.service';

@Component({
  selector: 'app-employee-listing',
  templateUrl: './employee-listing.component.html',
  styleUrl: './employee-listing.component.css',
})
export class EmployeeListingComponent {
  DATE_UI = DATE_UI;

  Department = Department;
  Gender = Gender;

  isLoading = false;
  displayedColumns = [
    'id',
    'firstName',
    'lastName',
    'email',
    'department',
    'actions',
  ];
  dataSource = new MatTableDataSource<Employee>();
  pagination = new UiPaginationModel();

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployeeListing();
  }

  onDeleteEmpClick(id: string): void {
    if (confirm('Confirm delete this employee?')) {
      this.employeeService.deleteEmployee(id).subscribe({
        next: () => {
          alert('Successfully deleted employee.');
          this.getEmployeeListing();
        },
        error: (err: ErrorModel) => {
          alert(err.error.message || UNEXPECTED_ERROR);
        },
      });
    }
  }

  onPaginationChange(event: PageEvent): void {
    this.pagination.pageIndex = event.pageIndex;
    this.pagination.pageSize = event.pageSize;

    this.getEmployeeListing();
  }

  private getEmployeeListing(): void {
    this.isLoading = true;
    this.employeeService
      .getEmployeeList(this.pagination.pageIndex + 1, this.pagination.pageSize)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe({
        next: (res) => {
          this.dataSource.data = res.data;
          this.pagination.length = res.totalRecord;
        },
        error: (err: ErrorModel) => {
          alert(err.error.message || UNEXPECTED_ERROR);
        },
      });
  }
}
