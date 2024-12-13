import { Department, Gender } from './employee.constant';

export interface EmployeeListing {
  totalRecord: number;
  pageNo: number;
  pageSize: number;
  data: Employee[];
}

export interface PostEmployee {
  firstName: string;
  lastName: string;
  email: string;
  gender: Gender;
  dateOfBirth: Date;
  phoneNumber: string;
  department: Department;
}

export interface Employee extends PostEmployee {
  id: string;
}
