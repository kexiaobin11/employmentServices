import {Company} from './company';

export interface Job {
  id: number;
  name: string;
  workPlace: string;
  requirement: string;
  minMonthSalary: string;
  maxMonthSalary: string;
  salaryDetail: string;
  company: Company;
  description: string;
}
