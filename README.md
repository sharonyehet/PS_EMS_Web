# PolicyStreet Employee Management System Web

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Project Introduction

This project is for PolicyStreet Fullstack Developer assignment, developed by Sharon. There are pages including Employee Listing, Employee Details, and Create & Edit Employee Details with mobile responsive supported. Kindly refer to below for more details.

### Employee Listing

This page includes a table which displays a list of employees with pagination supported.
http://localhost:4200/admin/employees

This page provides entry for features including:

- Add new employee
- View details of an employee
- Edit details of existing employee
- Delete an employee

### Employee Details

This page displays the details of an employee and provide entry for features including edit details & delete employee.

http://localhost:4200/admin/employees/1

### Create & Update Employee Details

This page displays a form for admin to add new employee or edit details of existing employee.

- Add
  http://localhost:4200/admin/employees/add

- Edit
  http://localhost:4200/admin/employees/1/edit

Field validations are implemented here, including:

- Mandatory fields: First Name, Last Name, Email, Gender, Department, Date of Birth
- Email: pattern validation
- Phone number: input type must be digit only with a maximum length of 12
- Date of birth: employee must be 18yo & above
