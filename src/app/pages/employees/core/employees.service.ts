import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ApiSuccessResponseModel } from '../../../core/models/response.model';
import { Employee, EmployeeListing, PostEmployee } from './employees.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private fullPath = `${environment.apiServer}/${environment.apiVersion}/employees`;

  constructor(private http: HttpClient) {}

  getEmployeeList(
    pageNo: number,
    pageSize: number
  ): Observable<EmployeeListing> {
    const params = {
      pageNo,
      pageSize,
    };

    return this.http.get<EmployeeListing>(`${this.fullPath}/list`, { params });
  }

  getEmployeeDetails(id: string): Observable<Employee> {
    return this.http.get<Employee>(`${this.fullPath}/${id}`);
  }

  addEmployee(details: PostEmployee): Observable<Employee> {
    return this.http.post<Employee>(`${this.fullPath}`, details);
  }

  updateEmployee(details: Employee): Observable<boolean> {
    return this.http
      .put<ApiSuccessResponseModel>(`${this.fullPath}`, details)
      .pipe(map((res) => res.success));
  }

  deleteEmployee(id: string): Observable<boolean> {
    return this.http
      .delete<ApiSuccessResponseModel>(`${this.fullPath}/${id}`)
      .pipe(map((res) => res.success));
  }
}
