import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../core/employees.service';
import { Employee } from '../core/employees.model';
import { BehaviorSubject, filter, finalize, Observable, Subject } from 'rxjs';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Department, Gender } from '../core/employee.constant';
import { DoB_MIN_YR } from '../../../core/constants/app.constants';
import moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrl: './add-edit-employee.component.css',
})
export class AddEditEmployeeComponent implements OnInit {
  Gender = Gender;
  Department = Department;
  MIN_DOB = moment().subtract(DoB_MIN_YR, 'years');

  isLoading = false;
  parentRefreshDetailsSubject!: BehaviorSubject<Employee | null>;
  id = '';

  employeeDetails: Employee | null = null;
  loadingPlaceholders = Array(8).fill(0);
  showFormError = false;
  isFormSubmitting = false;

  form = this.fb.group({
    id: [''],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    dateOfBirth: this.fb.control<Date | null>(null, [Validators.required]),
    phoneNumber: [''],
    gender: this.fb.control<Gender | null>(null, [Validators.required]),
    department: this.fb.control<Department | null>(null, [Validators.required]),
  });

  constructor(
    private employeeService: EmployeeService,
    private fb: NonNullableFormBuilder,
    private router: Router,
  ) {}

  ngOnInit(): void {
    if (this.id) {
      this.patchForm();
    }
  }

  onSubmit(): void {
    this.showFormError = false;

    if (this.form.invalid) {
      this.showFormError = true;
      return;
    }

    this.isFormSubmitting = true;

    const obs = this.id ? this.updateDetails$() : this.addEmployee$();

    obs.pipe(finalize(() => {
      this.isFormSubmitting = false;
    })).subscribe({
      next: () => {
        const message = this.id ? 'Successfully updated employee details' : 'Successfully added new employee';
        alert(message);
        this.router.navigate(['/']);
      },
      error: (err) => {
        alert(err || 'Error occured. Please try again.');
      }
    })
  }

  private patchForm(): void {
    this.parentRefreshDetailsSubject.subscribe((details) => {
      if (details) {
        this.employeeDetails = details;
        this.form.patchValue(details);
        this.form.controls.id.addValidators(Validators.required);
        this.form.controls.id.updateValueAndValidity();
      }
    });
  }

  private updateDetails$(): Observable<boolean> {
    return this.employeeService
      .updateEmployee(this.constructApiBody());
  }

  private addEmployee$(): Observable<boolean> {
    return this.employeeService
      .addEmployee(this.constructApiBody());
  }

  private constructApiBody(): Employee {
    const body: Employee = {
      id: this.form.controls.id.value,
      firstName: this.form.controls.firstName.value,
      lastName: this.form.controls.lastName.value,
      email: this.form.controls.email.value,
      gender: this.form.controls.gender.value!,
      dateOfBirth: this.form.controls.dateOfBirth.value!,
      phoneNumber: this.form.controls.phoneNumber.value,
      department: this.form.controls.department.value!,
    };

    return body;
  }
}
