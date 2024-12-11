import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../core/employees.service';
import { Employee } from '../core/employees.model';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';
import { Department, Gender } from '../core/employee.constant';
import { DATE_UI } from '../../../core/constants/app.constants';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css',
})
export class EmployeeDetailsComponent implements OnInit {
  DATE_UI = DATE_UI;

  Department = Department;
  Gender = Gender;

  isLoading = false;
  loadingPlaceholders = Array(8).fill(0);
  employeeDetails?: Employee;

  private id = this.route.snapshot.params['id'];

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    if (!this.id) {
      this.router.navigate(['..']);
    } else {
      this.getEmployeeDetails();
    }
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
        },
        error: (err) => {
          // TODO: Error pop up
          console.error(err);
        },
      });
  }
}
