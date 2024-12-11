import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { EmployeeListing } from './employees.model';
import { Observable, of } from 'rxjs';
import { Department } from './employee.constant';

@Injectable({
  providedIn: 'root'
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
          dateOfBirth: new Date(),
          phoneNumber: '0123456789',
          department: Department.HR,
        },
        {
          id: '002',
          firstName: 'John',
          lastName: 'Doe',
          dateOfBirth: new Date(),
          phoneNumber: '0133456789',
          department: Department.IT,
        },
        {
          id: '003',
          firstName: 'Abby',
          lastName: 'Yong',
          dateOfBirth: new Date(),
          phoneNumber: '0143456789',
          department: Department.Marketing,
        },
        {
          id: '004',
          firstName: 'Bettie',
          lastName: 'Kim',
          dateOfBirth: new Date(),
          phoneNumber: '0153456789',
          department: Department.Finance,
        },
        {
          id: '005',
          firstName: 'Chris',
          lastName: 'Lim',
          dateOfBirth: new Date(),
          phoneNumber: '0163456789',
          department: Department.Sales,
        },
      ],
    };
    return of(mockListing);

    return this.http.post<EmployeeListing>(`${this.fullPath}/list`, body);
  }
}
