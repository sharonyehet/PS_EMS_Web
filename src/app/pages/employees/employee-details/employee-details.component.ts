import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, finalize } from 'rxjs';
import {
  DATE_UI,
  UNEXPECTED_ERROR,
} from '../../../core/constants/app.constants';
import { ErrorModel } from '../../../core/models/response.model';
import { AddEditEmployeeComponent } from '../add-edit-employee/add-edit-employee.component';
import { Department, Gender } from '../core/employee.constant';
import { Employee } from '../core/employees.model';
import { EmployeeService } from '../core/employees.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css',
})
export class EmployeeDetailsComponent implements OnInit {
  DATE_UI = DATE_UI;

  Department = Department;
  Gender = Gender;

  isDetailVisible = true;
  isLoading = false;
  loadingPlaceholders = Array(8).fill(0);
  employeeDetails?: Employee;

  private id = this.route.snapshot.params['id'];
  private refreshDetailsSubject = new BehaviorSubject<Employee | null>(null);

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.id) {
      this.router.navigate(['..']);
    } else {
      this.getEmployeeDetails();
    }
  }

  onDeleteEmp(): void {
    if (!this.id) {
      return;
    }

    if (confirm('Confirm delete this employee?')) {
      this.employeeService.deleteEmployee(this.id).subscribe({
        next: () => {
          alert('Successfully deleted employee.');
          this.router.navigate(['/']);
        },
        error: (err: ErrorModel) => {
          alert(err.error.message || UNEXPECTED_ERROR);
        },
      });
    }
  }

  onOutletLoaded(component: AddEditEmployeeComponent): void {
    this.isDetailVisible = false;
    component.parentRefreshDetailsSubject = this.refreshDetailsSubject;
    component.id = this.id;
  }

  private getEmployeeDetails(): void {
    this.isLoading = true;
    this.employeeService
      .getEmployeeDetails(this.id)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe({
        next: (res) => {
          this.employeeDetails = res;
          this.refreshDetailsSubject.next(this.employeeDetails);
        },
        error: (err: ErrorModel) => {
          alert(err.error.message || UNEXPECTED_ERROR);
          this.router.navigate(['..']);
        },
      });
  }
}
