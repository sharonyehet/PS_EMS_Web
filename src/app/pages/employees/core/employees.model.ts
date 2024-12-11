import { Department } from "./employee.constant";

export interface EmployeeListing {
  totalRecord: number;
  pageNo: number;
  pageSize: number;
  data: Employee [];
}

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  phoneNumber: string;
  department: Department;
}
