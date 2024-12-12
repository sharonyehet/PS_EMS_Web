import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Employee, EmployeeListing } from './employees.model';
import { Observable, of } from 'rxjs';
import { Department, Gender } from './employee.constant';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private fullPath = `${environment.apiServer}/employee/${environment.apiVersion}`;

  constructor(private http: HttpClient) {}

  getEmployeeList(): Observable<EmployeeListing> {
    const body = {
      skip: 0,
      take: 10,
    };

    const mockListing: EmployeeListing = {
      totalRecord: 35,
      pageNo: 0,
      pageSize: 10,
      data: [
        {
          id: '001',
          firstName: 'Jackie',
          lastName: 'Chong',
          email: 'jackie.chong@mail.com',
          dateOfBirth: new Date(),
          gender: Gender.Male,
          phoneNumber: '0123456789',
          department: Department.HR,
        },
        {
          id: '002',
          firstName: 'John',
          lastName: 'Doe',
          email: 'john.doe@mail.com',
          dateOfBirth: new Date(),
          gender: Gender.Male,
          phoneNumber: '0133456789',
          department: Department.IT,
        },
        {
          id: '003',
          firstName: 'Abby',
          lastName: 'Yong',
          email: 'abby.yong@mail.com',
          dateOfBirth: new Date(),
          gender: Gender.Female,
          phoneNumber: '0143456789',
          department: Department.Marketing,
        },
        {
          id: '004',
          firstName: 'Bettie',
          lastName: 'Kim',
          email: 'bettie.kim@mail.com',
          dateOfBirth: new Date(),
          gender: Gender.Female,
          phoneNumber: '0153456789',
          department: Department.Finance,
        },
        {
          id: '005',
          firstName: 'Chris',
          lastName: 'Lim',
          email: 'chris.lim@mail.com',
          dateOfBirth: new Date(),
          gender: Gender.Male,
          phoneNumber: '0163456789',
          department: Department.Sales,
        },
      ],
    };
    return of(mockListing);

    return this.http.post<EmployeeListing>(`${this.fullPath}/list`, body);
  }

  getEmployeeDetails(id: string): Observable<Employee> {
    const mockRes = {
      id: '001',
      firstName: 'Jackie',
      lastName: 'Chong',
      email: 'jackie.chong@mail.com',
      dateOfBirth: new Date('01/01/2000'),
      phoneNumber: '0123456789',
      gender: Gender.Male,
      department: Department.HR,
    };
    return of(mockRes);

    return this.http.get<Employee>(`${this.fullPath}/${id}`);
  }

  addEmployee(details: Employee): Observable<boolean> {
    return of(true);

    return this.http.post<boolean>(`${this.fullPath}/add`, details);
  }

  updateEmployee(details: Employee): Observable<boolean> {
    return of(true);

    return this.http.put<boolean>(`${this.fullPath}/${details.id}`, details);
  }

  deleteEmployee(id: string): Observable<boolean> {
    return of(true);

    return this.http.delete<boolean>(`${this.fullPath}/${id}`);
  }
}
